import React from "react";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const cartItems = props.products.filter((product) => product.quantity > 0);

  const goToShop = () => navigate("/");
  const goToSignIn = () => navigate("/signin");

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Your Cart Items</h4>

      {cartItems.length === 0 ? (
        <>

          <p className="text-muted">There are {cartItems.length} items in your cart.</p>


          <button className="btn btn-success" onClick={goToShop}>
            Continue Shop
          </button>
        </>
      ) : (
        <>
          <div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="border rounded p-3 mb-3"
                style={{ backgroundColor: "#8f9fa" }}
              >
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "80px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <p className="mb-0 fw-bold">{product.name}</p>
                  </div>

                  <div className="col-md-4 text-end">
                    <p className="mb-0">
                      <strong>Quantity:</strong> {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <button className="btn btn-primary" onClick={goToSignIn}>
            Check Out
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;