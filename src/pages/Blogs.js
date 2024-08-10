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
          <h1 className="gradient-text">Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptas quisquam totam sint. Harum dolor eaque ut suscipit, nam,
            hic deleniti minima, eos nulla asperiores ullam omnis temporibus
            natus itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            voluptas quisquam totam sint. Harum dolor eaque ut suscipit, nam,
            hic deleniti minima, eos nulla asperiores ullam omnis temporibus
            natus itaque?
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
