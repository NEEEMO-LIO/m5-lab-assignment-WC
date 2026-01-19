import React from 'react';

function Cart(props) {
  const cartItems = props.products.filter(product => product.quantity > 0);

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Your Cart Items</h4>
      
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div 
              key={product.id} 
              className="border rounded p-3 mb-3"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="row align-items-center">
    
                <div className="col-md-2">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ 
                      width: '80px',
                      objectFit: 'contain'
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
      )}
    </div>
  );
}

export default Cart;