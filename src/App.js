import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Blogs from "./pages/Blogs";
import ArticlePage from "./pages/ArticlePage";
import { db } from "./firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function App() {
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
    <Router>
      <div className="App bg-black text-white p-0 container-fluid h-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blogs blogs={blogs} />} />
          <Route path="/blog/:id" element={<ArticlePage blogs={blogs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
