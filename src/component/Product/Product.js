import React from "react";
import css from "./Product.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { img, name, price, seller, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>

      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p> <small>by : {seller}</small> </p>
        <h4>{price}</h4>
        <p>Only {stock} item in stock - order soon</p>
        <button onClick={() => props.handleAddProduct(props.product)} className="addItemBtn"> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
