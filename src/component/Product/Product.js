import React from "react";
import { Link } from "react-router-dom";
import css from "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name"><Link to={"/product/" + key}>{name}</Link> </h4>
        <br />
        <p> <small>by : {seller}</small> </p>
        <h4>{price}</h4>
        <p>Only {stock} item in stock - order soon</p>
        {props.showAddToCart && <button onClick={() => props.handleAddProduct(props.product)} className="addItemBtn"> Add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
