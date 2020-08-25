import React from 'react';

function ShoeCard(props) {
  return (
    <div className="card text-center" style={{width: 18 + 'em'}}>
      <h5 className="card-title">{props.modelName}</h5>
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <p className="card-text">Brand: {props.brand}</p>
        <p className="card-text">Size: {props.size}</p>
        <p className="card-text">Offer minimum: {props.offerMin}</p>
        <p className="card-text">Offer maximum: {props.offerMax}</p>
        <a href="#" className="btn btn-primary">Make an offer</a>
      </div>
    </div>
  );
}

export default ShoeCard;