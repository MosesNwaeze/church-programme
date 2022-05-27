import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./products.css";
import ProductItems from "./ProductItems";

const Products = (props) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [itemClick, setItemClick] = useState(false);
  const [productClicked, setProductClicked] = useState({});

  const navigate = useNavigate();
  const handleCheck = (event, item) => {
    if (event.target.checked && typeof item !== "undefined") {
      setSelectedProduct((currentProduct) => [...currentProduct, item]);
    } else if (!event.target.checked && typeof item !== "undefined") {
      const productIndex = selectedProduct.indexOf(item);
      selectedProduct.splice(productIndex, 1);
      setSelectedProduct((currentProduct) => [...currentProduct]);
    }
  };

  const totalPrice = () => {
    let total = 0.0;
    selectedProduct.map((item) => {
      total += item.price;
    });
    return total.toLocaleString();
  };

  function handleBooking(event) {
    event.preventDefault();
    props.selectedProduct(selectedProduct);
     navigate("/user-information");
  }

  const handleItemClick = useCallback(() => {
    if (itemClick) {
      navigate(`/products/${productClicked.id}`, { state: productClicked });
    }
  }, [itemClick, productClicked, navigate]);

  useEffect(() => {
    handleItemClick();
  }, [handleItemClick]);

  return (
    <div className="product-list">
      <div className="product-info">
        <h2>Bazaar Items </h2>
        <div
          className="selected-product"
          style={
            selectedProduct.length > 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          {selectedProduct.map((item) => {
            return (
              <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>Price: &#8358;{item.price}</p>
                <hr className="hr" />
              </div>
            );
          })}
          <p>Total items: {selectedProduct.length}</p>
          <p>
            Total price:{" "}
            <span className="total-price">&#8358;{totalPrice()}</span>{" "}
          </p>
        </div>
      </div>

      <form className="product-form">
        <div className="form-group">
          <input type="checkbox" />
          <label>Product Name</label>
          <label>Product Price</label>
        </div>
        {props.products.map((item, index) => {
          return (
            <div key={item.id}>
              <ProductItems
                products={item}
                handleCheck={handleCheck}
                handleItemClick={setItemClick}
                objectClicked={setProductClicked}
              />
            </div>
          );
        })}
        <button type="submit" className="booking" onClick={handleBooking}>
          Proceed To Booking
        </button>
      </form>
    </div>
  );
};

export default Products;
