import React from 'react';

const Card = ({ project, onOpenModal }) => {
  return (
    <div className="card" onClick={() => onOpenModal(project)}>
      <img src={project.image} alt={project.title} />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <span>{project.category}</span>
      </div>
    </div>
  );
};

export default Card;
