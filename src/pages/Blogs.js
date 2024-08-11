import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Navigation from "../Components/Navigation";
import CardBlog from "../Components/CardBlog";
import Footer from "../Components/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsRef = collection(db, "blogs");
      const q = query(blogsRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const blogsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsList);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container-fluid ">
      <Navigation />
      <div className="container">
        <div className="py-3">
          <h1 className="gradient-text">Bienvenue sur notre Blog !</h1>
          <p>
            Explorez une collection d’articles dédiés à la création de sites
            vitrines, de landing pages et à l’optimisation de votre présence en
            ligne. Que vous soyez une PME en quête de conseils pratiques ou un
            entrepreneur curieux des dernières tendances du web, nos articles
            vous fourniront des astuces, des études de cas, et des bonnes
            pratiques pour vous aider à tirer le meilleur parti de votre site
            web. Plongez dans nos contenus pour découvrir comment améliorer
            votre visibilité, convertir vos visiteurs en clients, et éviter les
            erreurs courantes dans le développement web. 🚀
          </p>
        </div>
        <div>
          <CardBlog blogs={blogs} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
