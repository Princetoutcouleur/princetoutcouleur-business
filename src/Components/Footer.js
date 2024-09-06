import React from 'react';
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid yellow py-2">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-lg-start mb-2 mb-lg-0">
          <p>© 2024 Baba Thiam. Tous droits réservés</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center justify-content-lg-end">
          <ul className='list-unstyled d-flex gap-4'>
            <li><FaLinkedin className='fs-4'/></li>
            <li><FaInstagramSquare className='fs-4'/></li>
            <li><FaTwitterSquare className='fs-4'/></li>
            <li><a href="#" className='text-white'>Me contacter</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
