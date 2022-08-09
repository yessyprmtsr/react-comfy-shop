import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./pages/PrivateRoute";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route exact path="/products/:id" element={<SingleProductPage />} />
          <Route exact path="/products/:id" element={<SingleProductPage />} />

          <Route exact path="/checkout" element={<PrivateRoute />}>
            <Route exact path="/checkout" element={<CheckoutPage />} />
          </Route>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
