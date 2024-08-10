import React from "react";
import { Link } from "react-router-dom";

const CardBlog = ({ blogs }) => {
  return (
    <div className="row">
      {blogs.map((blog) => (
        <div key={blog.id} className="col-lg-4 col-md-4 col-sm-12 mb-4">
          <div className="card bg-dark text-white h-100">
            <img
              src={blog.imageUrl}
              className="card-img-top h-50"
              alt={blog.title}
            />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.content.substring(0, 100)}...</p>
              <Link to={`/blog/${blog.id}`} className="btn btn-warning ">
                Lire plus
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBlog;
