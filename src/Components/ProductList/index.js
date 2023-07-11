import React from "react";
import ProductItem from "../ProductsItem";

export default function ProductList({ products, onMove }) {
  return (
    <div className="productList">
      {products.map((elm, i) => {
        return <ProductItem key={i} product={elm} onMove={onMove}/>
      })}
    </div>
  );
}
