import React from "react";
import WhatsApp from 'react-whatsapp';

const CardServices = (props) => {
  return (
    <div id="CardServices" className="mb-3">
      <div class="card border text-white bg-transparent rounded-0 shadow p-3">
        <div class="card-body">
          <div className="">
            <img src={props.img} alt="" className="mb-2"/>
          </div>
            <div>
              <h5 class="card-title text-capitalize fs-4">{props.title}</h5>
            </div>
          <p class="card-text">{props.description}</p>
          <div className="">
            <div>
              <WhatsApp
                number="+221771010502"
                message={props.message}
                className="btn btn-default mx-auto " id="whatsapp"
              >Parlons-en sur WhatsApp</WhatsApp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
