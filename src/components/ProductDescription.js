import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const ProductDescription = (props) => {
  const param = useParams();
  const location = useLocation();
  const paramId = param.id;
  const productDetails = location.state;

  return (
    <div className="details">
      <p>Product ID: {paramId}</p>
      <p>Product Name: {productDetails.name}</p>
      <p>
        Product Price: <span className="de-p">{productDetails.price}</span>
      </p>

      <Link to="/" className="back">
        Back To Products List
      </Link>
    </div>
  );
};

export default ProductDescription;
