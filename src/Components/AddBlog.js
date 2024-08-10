import React, { useState } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !date || !image) {
      alert("Veuillez remplir tous les champs et sélectionner une image.");
      return;
    }

    setUploading(true);

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle progress
      },
      (error) => {
        console.error("Erreur de téléchargement de l'image :", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        await addDoc(collection(db, "blogs"), {
          title,
          content,
          date,
          imageUrl: downloadURL,
          createdAt: serverTimestamp(),
        });

        setTitle("");
        setContent("");
        setDate("");
        setImage(null);
        setUploading(false);
        Swal.fire({
          icon: 'success',
          title: 'Article modifié',
          text: 'L\'article a été modifié avec succès.',
        });
      }
    );
  };

  return (
    <div id="#AddBlog">
      <button
        type="button"
        className="btn btn-link text-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Ajouter
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Ajouter un article
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-3"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Titre"
                />
                <textarea
                  className="form-control mb-3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Contenu"
                />
                <input
                  className="form-control mb-3"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  className="form-control mb-3"
                  type="file"
                  onChange={handleImageChange}
                />
                <button type="submit" className="btn btn-warning" disabled={uploading}>
                  {uploading ? "Téléchargement..." : "Ajouter"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
