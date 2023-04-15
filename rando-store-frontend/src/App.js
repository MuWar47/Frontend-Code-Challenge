import React from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./login";
import AddNew from "./addnew";
import ErrorPage from "./error";
import AllProducts from "./AllProducts";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/addnew" element={<AddNew />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
