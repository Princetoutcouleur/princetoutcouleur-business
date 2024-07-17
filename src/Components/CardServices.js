import React from "react";
import WhatsApp from 'react-whatsapp';

const CardServices = (props) => {
  return (
    <div id="CardServices" className="mb-3">
      <div class="card rounded-0 shadow p-3">
        <div class="card-body">
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex justify-content-center align-items-center py-2 px-3 border rounded-circle shadow skill-icon">
              <span className="fs-3 ">{props.icon}</span>
            </div>
            <div>
              <h5 class="card-title text-capitalize fs-4">{props.title}</h5>
            </div>
          </div>
          <p class="card-text">{props.description}</p>
          <div className="">
            <div>
              {/* <a href={props.url} className="text-white text-decoration-none">
                <button className="btn btn-dark mx-auto">En Savoir plus</button>
              </a> */}
              <WhatsApp
                number="+221771010502"
                message={props.message}
                className="btn btn-dark mx-auto"
              >En Savoir plus</WhatsApp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
