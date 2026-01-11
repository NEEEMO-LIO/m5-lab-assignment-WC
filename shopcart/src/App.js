import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Products(props) {
  return (
    <>
      {props.products.map((item) => (
        <div key={item.id} className="border-bottom py-3">

          <h6 className="mb-3">{item.name}</h6>

          <div className="row align-items-center">
            <div className="col-3">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid"
              />
            </div>

            <div className="col-3">
              <input
                type="number"
                value={item.quantity}
                readOnly
                className="form-control text-center w-10"
                style={{ width: "60px" }}
              />
              <small>quantity</small>
            </div>
          </div>

        </div>
      ))}
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          name: "Unisex Cologne",
          image: "/products/cologne.jpg",
          quantity: 0
        },
        {
          id: 2,
          name: "Apple iWatch",
          image: "/products/iwatch.jpg",
          quantity: 0
        },
        {
          id: 3,
          name: "Unique Mug",
          image: "/products/mug.jpg",
          quantity: 0
        },
        {
          id: 4,
          name: "Mens Wallet",
          image: "/products/wallet.jpg",
          quantity: 0
        }
      ]
    };
  }

  render() {
    return (
      <>
        {/* Header */}
        <div className="bg-info py-5">
          <div className="container d-flex justify-content-between align-items-center">
            <h3 className="m-0 text-dark">Shop to React</h3>

            <div className="text-dark">
              🛒 <span className="ms-2">0 items</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="container mt-3">
          <Products products={this.state.products} />
        </div>
      </>
    );
  }
}

export default App;
