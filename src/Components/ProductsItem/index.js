import React from "react";

export default function ProductItem({ product, onMove }) {
  return (
    <div className="ProductItem">
      <img src={require("../../" + product.photo)}/>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button onClick={() => onMove(product)}>Order</button>
    </div>
  );
}
