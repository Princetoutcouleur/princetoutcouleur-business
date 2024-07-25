import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "my_business_contact";
    const templateId = "template_22rt1ro";
    const publicKey = "qK_Ak3CCp8yNBvSM3";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Baba Thiam",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message envoyé avec succès!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Message non envoyé");
      });
  };

  return (
    <div id="Contact" className="container-fluid  p-5 text-black">
      <ToastContainer />
      <div className="yellow m-4 p-4 rounded-4">
        <div className="text-center mb-5">
          <h2 className="mb-3 ">Prenez contact</h2>
          <p>
            Prêt à donner un coup d'accélérateur à votre présence en ligne ?{" "}
            <br /> Contactez-moi dès aujourd'hui pour discuter de votre projet !
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <form id="contact-form " onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-pill border border-dark border-1"
                placeholder="Nom Complet"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="user_name">Nom complet</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control rounded-pill border border-dark border-1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="user_email">Adresse email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control rounded-pill border border-dark border-1"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <div className="d-flex justify-content-center mb-4">
              <button type="submit" className="btn btn-dark px-5">
                Envoyer
              </button>
            </div>
            <div className="d-flex justify-content-center gap-3">
              <a
                className="text-dark"
                target="blank"
                href="https://www.instagram.com/the_princetoutcouleur/"
              >
                <FaInstagramSquare className="fs-3" />
              </a>
              <a
                className="text-dark"
                target="blank"
                href="https://twitter.com/Babathiam01"
              >
                <FaTwitterSquare className="fs-3" />
              </a>
              <a
                className="text-dark"
                target="blank"
                href="https://www.linkedin.com/in/baba-thiam-a7b86222a/"
              >
                <FaLinkedin className="fs-3" />
              </a>
              <a
                className="text-dark"
                target="blank"
                href="https://github.com/Princetoutcouleur"
              >
                <FaGithub className="fs-3" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
