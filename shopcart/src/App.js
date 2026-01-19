import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './navbar';
import productsData from './products';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: productsData
    };
  }

  handleAdd = (id) => {
    const updatedProducts = this.state.products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  }

  handleSubtract = (id) => {
    const updatedProducts = this.state.products.map(product => {
      if (product.id === id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          products={this.state.products}
          handleAdd={this.handleAdd}
          handleSubtract={this.handleSubtract}
        />
      </div>
    );
  }
}

export default App;