import React from "react";

const CardProject = (props) => {
  return (
    <div id="CardProject" className="mb-3" data-aos="flip-up">
      <div class="card rounded-4 shadow">
        <div className="card-img-top p-3">
          <img
            src={props.image}
            class="img-fluid rounded"
            alt="..."
          />
        </div>

        <div class="card-body text-center">
          <h5 class="card-title text-capitalize fs-4">
            {props.title}
          </h5>
          <p class="card-text">{props.description}</p>
          <div className="">
            <div>
                <a href={props.url} className="text-white text-decoration-none">
                <button className="btn btn-default text-white mx-auto rounded-pill yellow">
                  Voir Projet
                </button>
                </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
