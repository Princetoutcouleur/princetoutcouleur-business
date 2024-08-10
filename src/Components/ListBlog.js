import React, { useEffect, useState, useRef } from "react";
import { db, storage } from "../firebase";
import { collection, query, orderBy, limit, startAfter, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ReactPaginate from "react-paginate";
import AddBlog from "./AddBlog";
import Swal from 'sweetalert2';
import bootstrap from "bootstrap/dist/js/bootstrap.min";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const modalRef = useRef(null);

  const fetchBlogs = async (page = 0) => {
    const blogsRef = collection(db, "blogs");
    let q = query(blogsRef, orderBy("date", "desc"), limit(8));
    if (page !== 0) {
      q = query(blogsRef, orderBy("date", "desc"), startAfter(lastDoc), limit(8));
    }
    const documentSnapshots = await getDocs(q);
    const blogsList = documentSnapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogsList);
    setLastDoc(documentSnapshots.docs[documentSnapshots.docs.length - 1]);

    const totalBlogs = (await getDocs(blogsRef)).size;
    setPageCount(Math.ceil(totalBlogs / 8));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePageClick = async (data) => {
    const page = data.selected;
    await fetchBlogs(page);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
    Swal.fire({
      icon: 'success',
      title: 'Article supprimé',
      text: 'L\'article a été supprimé avec succès.',
    });
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setDate(blog.date);
    setImage(null); // Réinitialise l'image
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedBlog) {
      console.error("No blog selected for update");
      return;
    }
    
    let imageUrl = selectedBlog.imageUrl; // Utilise l'URL existante par défaut
    if (image) {
      // Si une nouvelle image est sélectionnée, télécharge-la
      const imageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    const blogRef = doc(db, "blogs", selectedBlog.id);
    await updateDoc(blogRef, {
      title,
      content,
      date,
      imageUrl,
    });
    setSelectedBlog(null);
    setImage(null); // Réinitialise l'image après la mise à jour
    fetchBlogs();
    
    // Affiche une alerte et ferme le modal
    Swal.fire({
      icon: 'success',
      title: 'Article modifié',
      text: 'L\'article a été modifié avec succès.',
    });

    if (modalRef.current) {
      const modal = bootstrap.Modal.getInstance(modalRef.current);
      if (modal) {
        modal.hide();
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <h5>Ajouter un article :</h5>
        <AddBlog />
      </div>
      <table className="table rounded rounded-4">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Image</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td><img src={blog.imageUrl} alt={blog.title} style={{ width: "100px" }} /></td>
              <td>{new Date(blog.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleEdit(blog)} className="btn btn-primary btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editModal">
                  Modifier
                </button>
                <button onClick={() => handleDelete(blog.id)} className="btn btn-danger btn-sm">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />

      {/* Modal pour modifier l'article */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
        ref={modalRef} // Ajoute la référence ici
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">Modifier un article</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdate}>
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
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button type="submit" className="btn btn-warning">Modifier</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
