import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Menu from "./components/Menu";
import Product from "./components/products/product";
import Contactus from "./components/contactus";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
