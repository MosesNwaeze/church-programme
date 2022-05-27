import React from "react";
import "./products.css";

const formatCurrency = (item) => item.toLocaleString();

const ProductItems = (props) => {
  const handleItemClick = (event) => {
    event.preventDefault();
    props.handleItemClick(true);
    props.objectClicked(props.products);
  };
  return (
    <div className="product-item">
      <div className="product-checkbox">
        <input
          type="checkbox"
          onClick={(event) => props.handleCheck(event, props.products)}
        />
      </div>
      <div className="product-name">
        <label onClick={handleItemClick}>{props.products.name}</label>
      </div>
      <div className="product-price">
        <label onClick={handleItemClick}>
          &#8358;{formatCurrency(props.products.price)}
        </label>
      </div>
    </div>
  );
};

export default ProductItems;
