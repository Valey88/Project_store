import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./page/Products/Products";
import Product from "./page/product/Product";
import Registration from "./page/Registration/Registration";
import Login from "./page/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
