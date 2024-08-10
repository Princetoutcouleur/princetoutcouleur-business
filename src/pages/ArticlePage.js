import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

const ArticlePage = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  return (
    <div className="container-fluid">
      <Navigation />
      <div className="container">
        {blog ? (
          <>
            <h1 className="my-4">{blog.title}</h1>
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="img-fluid mb-4 rounded rounded-4"
            />
            <p className="mb-4">{blog.content}</p>
            <p>{new Date(blog.date).toLocaleDateString()}</p>
            <p>Par Baba Thiam</p>
          </>
        ) : (
          <p>Article non trouvé</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
