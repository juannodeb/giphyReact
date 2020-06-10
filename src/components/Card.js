import React from 'react';

const Card = ({image, title, url}) => {
  return (
  <div className="card">
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <a href={url} className="card-text">{title}</a>
    </div>
  </div>
  );
}

export default Card;
