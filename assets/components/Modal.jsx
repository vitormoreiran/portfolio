import React from 'react';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <span>{project.category}</span>
        <p>{project.details}</p>
      </div>
    </div>
  );
};

export default Modal;
