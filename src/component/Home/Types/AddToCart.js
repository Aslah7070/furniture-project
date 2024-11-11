

import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../contextFolder/ProductContext';
import axios from 'axios';

function AddToCart() {
 

      const{incrementQuantity,decrementQuantity,removeFromCart,cartItems,byProduct}= useContext(CartContext)
  


      
  //  const display=async()=>{
  //   try {
  //     const responce= await axios.get("http://localhost:3000/getcart")
  //     console.log(responce);
      
  //   } catch (error) {
      
  //   }
  //  }
  //  display()
          
  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.productsId.offerPrice * product.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item._id} className="col-md-4 mb-4">
              <div className="card border rounded shadow-sm">
                <img src={item.productsId.image} alt={item.productsId.imageCategory} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.productsId.imageCategory}</h5>
                  <p className="card-text text-danger">Price: ₹{item.productsId.offerPrice}</p>
                  <div className="d-flex align-items-center mb-2">
                    <p className="mb-0 me-2">Quantity:</p>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decrementQuantity(item.productsId._id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        className="form-control w-25 text-center"
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => incrementQuantity(item.productsId._id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button onClick={() => removeFromCart(item.productsId._id)} className="btn btn-danger btn-sm">Remove</button>
                    <p className="fw-bold mb-0">Subtotal: ₹{(item.productsId.offerPrice * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-end mt-4">
          <button >clear all items</button>
            <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
            <button onClick={() => byProduct()} className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
            
          </div>
          
        </div>
      )}
    </div>
  );  
}

export default AddToCart;
