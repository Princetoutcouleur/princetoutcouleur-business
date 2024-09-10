import React from "react";
import baba from "../Asset/baba.png";

const Contact = () => {
  return (
    <div id="Contact" className="container-fluid py-5 text-white">
      <div className="text-center mt-5" data-aos="fade-up">
        <h2 className="mb-3 section-title">Comment puis-je vous aider ?</h2>
        <p>
          Pour commencer, vous pouvez me contacter en cliquant sur le bouton
          ci-dessous.
        </p>
        <div className="d-flex justify-content-center mb-4">
          <div>
            <img
              src={baba}
              alt=""
              className="img-fluid rounded-circle"
              width="200px"
            />
          </div>
        </div>
        <div className="text-center">
          <a href="https://tally.so/r/m6vN5o">
            <button className="btn btn-default border border-dark border-1 yellow px-4 rounded-pill text-white">
              Me contacter
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
