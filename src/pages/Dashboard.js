import React from "react";
import ListBlog from "../Components/ListBlog";
import Navigation from "../Components/Navigation";

const Dashboard = () => {
  return (
    <div id="Dashboard" className="container-fluid pb-5 ">
      <div className="container-fluid">
        <Navigation />
      </div>
      <div className="container">
        <div className="mb-5">
          <h1 className="gradient-text">Dashboard</h1>
        </div>
        <div className="container">
          <h5 className="mb-4">Liste de touss les articles :</h5>
          <ListBlog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
