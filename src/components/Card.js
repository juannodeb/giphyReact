import React from 'react';

const Card = ({image, title, url}) => {
  return (
    <div className="col-sm-12 col-md-4 my-5">
      <div className="card my-5">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center font-weight-bolder">
          <a href={url}>{title}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
