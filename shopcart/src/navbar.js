import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const totalItems = props.products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div style={{ backgroundColor: "#00bcd4" }} className="py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <h3 className="m-0 text-white d-flex align-items-center">
              Shop 2
              <span
                style={{
                  backgroundColor: "white",
                  color: "#00bcd4",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "8px",
                  fontWeight: "bold",
                }}
              >
                R
              </span>
              <span style={{ marginLeft: "8px" }}>eact</span>
            </h3>
          </Link>

          <Link to="/cart" className="text-white text-decoration-none">
            <i className="fas fa-shopping-cart me-2"></i>
            {totalItems} items
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
