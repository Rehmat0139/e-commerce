import React from "react";
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetail";
import { GlobalStateProvider } from "./Global/GlobalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  );
}

export default App;
