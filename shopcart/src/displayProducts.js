import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImage(product);
  };

  return (
    <div className="container mt-4">

      {/* SORT DROPDOWN */}
      <div className="mb-4 text-center">
        <label className="me-2 fw-semibold">Sort Price By:</label>
        <select
          value={props.sortType}
          onChange={props.handleSortChange}
          className="form-select d-inline-block"
          style={{ width: "160px" }}
        >
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>

      {props.products.map((item) => (
        <div key={item.id} className="border-bottom py-3">
          <h6 className="mb-1">
            {item.name}{" "}
            <span className="text-danger fw-semibold">${item.price}</span>
          </h6>

          <div className="row align-items-center">
            <div className="col-2">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  cursor: "pointer",
                  objectFit: "contain",
                }}
                onClick={() => handleShow(item)}
              />
            </div>

            <div className="col-3">
              <button
                className="btn btn-secondary btn-sm me-2"
                onClick={() => props.handleAdd(item.id)}
                style={{ width: "40px", height: "35px" }}
              >
                <i className="fas fa-plus-circle"></i>
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => props.handleSubtract(item.id)}
                style={{ width: "40px", height: "35px" }}
              >
                <i className="fas fa-minus-circle"></i>
              </button>
            </div>

            <div className="col-3">
              <div className="d-flex flex-column align-items-center">
                <small className="text-muted mb-1">Quantity</small>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  className="form-control text-center"
                  style={{ width: "60px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* MODAL */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={showImage.image}
            alt={showImage.name}
            style={{
              width: "100%",
              maxWidth: "350px",
              marginBottom: "15px",
            }}
          />
          <p className="mb-1">
            <strong>Price:</strong> ${showImage.price}
          </p>
          <p className="mb-0">
            <strong>Ratings:</strong> {showImage.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;
