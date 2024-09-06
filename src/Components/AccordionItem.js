import React from "react";

const AccordionItem = ({ id, title, content, isOpen, toggle }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={() => toggle(id)}
          aria-expanded={isOpen}
          aria-controls={`collapse${id}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <strong>{content}</strong>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
