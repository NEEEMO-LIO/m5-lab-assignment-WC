import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

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
      {props.products.map((item) => (
        <div key={item.id} className="border-bottom py-3">
          <h6 className="mb-3">{item.name}</h6>

          <div className="row align-items-center">
       
            <div className="col-2">
              <img
                src={item.image}
                alt={item.name}
                style={{ 
                  width: '100px', 
                  cursor: 'pointer',
                  objectFit: 'contain'
                }}
                onClick={() => handleShow(item)}
              />
            </div>

 
            <div className="col-3">
              <button 
                className="btn btn-secondary btn-sm me-2"
                onClick={() => props.handleAdd(item.id)}
                style={{ width: '40px', height: '35px' }}
              >
                <i className="fas fa-plus-circle"></i>
              </button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => props.handleSubtract(item.id)}
                style={{ width: '40px', height: '35px' }}
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

    
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{showImage.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img 
            src={showImage.image}
            alt={showImage.name}
            style={{ 
              width: '100%', 
              maxWidth: '350px',
              marginBottom: '15px'
            }}
          />
          <p className="mb-0">
            <strong>Ratings:</strong> {showImage.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DisplayProducts;