import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data";
import Products from "./Products";
import UserInput from "./UserInput";
import ProductDescription from "./ProductDescription";
import Error from "./Error";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products products={data} selectedProduct={setSelectedProduct} />
          }
        />
        <Route path="products/:id" element={<ProductDescription />} />
        <Route
          path="user-information"
          element={<UserInput userDetails={setUserDetails} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
