import React from 'react';

function ShoeCard(props) {
  return (
    <div className="card text-center" style={{width: 12 + 'em'}}>
      <h5 className="card-title">{props.modelName}</h5>
      <img src="https://image.flaticon.com/icons/svg/1785/1785348.svg" className="card-img-top" alt="Sample Image"></img>
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