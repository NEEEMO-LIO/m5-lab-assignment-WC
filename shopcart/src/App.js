import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import productsData from "./products";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./signin";
import CheckOut from "./checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
      user: null,
    };
  }

  handleAdd = (id) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  handleSubtract = (id) => {
    const updatedProducts = this.state.products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  setUser = (userObj) => {
    this.setState({ user: userObj });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar products={this.state.products} />

        <Routes>
          <Route
            path="/"
            element={
              <DisplayProducts
                products={this.state.products}
                handleAdd={this.handleAdd}
                handleSubtract={this.handleSubtract}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart products={this.state.products} />}
          />

          <Route
            path="/signin"
            element={<SignIn user={this.state.user} setUser={this.setUser} />}
          />

          <Route
            path="/checkout"
            element={<CheckOut user={this.state.user} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
