import React from "react";

const CardServices = (props) => {
  const IconComponent = props.icon;

  return (
    <div id="CardServices" className="mb-3" data-aos="zoom-in">
      <div className="card border text-white bg-transparent rounded-0 p-2">
        <div className="card-body">
          <div className="mb-3">
            {IconComponent && <IconComponent className='fs-2 yellow-text'/>} 
          </div>
          <div>
            <h5 className="card-title text-capitalize fs-4 yellow-text">{props.title}</h5>
          </div>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardServices;
