import React from "react";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="Contact" className="container-fluid py-5">
      <div className="text-center mb-5">
        <h2 className="mb-3">Prenez contact avec nous</h2>
        <p>
          J'aimerais avoir de vos nouvelles ! Discutons de la manière dont je
          peux vous aider à atteindre vos objectifs.
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <form className="">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control rounded-0 border border-dark border-1"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Nom complet</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control rounded-0 border border-dark border-1"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Adresse email</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control rounded-0 border border-dark border-1"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <button type="submit" class="btn btn-dark px-5">
              Envoyer
            </button>
          </div>
          <div className="d-flex justify-content-center gap-4">
            <a
              className="text-dark"
              target="blank"
              href="https://www.instagram.com/the_princetoutcouleur/"
            >
              <FaInstagramSquare className="fs-2" />
            </a>
            <a
              className="text-dark"
              target="blank"
              href="https://twitter.com/Babathiam01"
            >
              <FaTwitterSquare className="fs-2" />
            </a>
            <a
              className="text-dark"
              target="blank"
              href="https://www.linkedin.com/in/baba-thiam-a7b86222a/"
            >
              <FaLinkedin className="fs-2" />
            </a>
            <a
              className="text-dark"
              target="blank"
              href="https://github.com/Princetoutcouleur"
            >
              <FaGithub className="fs-2" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
