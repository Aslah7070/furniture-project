

// import React, { useContext } from 'react';
// import { MyContext } from '../../contextFolder/AllContext';

//  // Adjust the path as needed
// // import './Cart.css'; // Optionally, create a CSS file for styling

// function AddToCart() {
//   const { cart } = useContext(MyContext);

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.price * product.qty, 0);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h4>{item.name}</h4>
//                 <p>Price: ${item.price}</p>
//                 <p>Quantity: {item.qty}</p>
//               </div>
//             </div>
//           ))}
//           <h3>Total Price: ${getTotalPrice()}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddToCart;


// import React, { useContext } from 'react';
// import { MyContext } from '../../contextFolder/AllContext';

// function AddToCart() {
//   const { UseCarts } = useContext(MyContext);

//   const { cart } = UseCarts;

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.new_price * product.qty, 0);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h4>{item.name}</h4>
//                 <p>Price: ${item.new_price}</p>
//                 <p>Quantity: {item.qty}</p>
//               </div>
//             </div>
//           ))}
//           <h3>Total Price: ${getTotalPrice()}</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddToCart;







// import React, { useContext } from 'react';
// import { MyContext } from '../../contextFolder/AllContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AddToCart() {
//   const { UseCarts } = useContext(MyContext);
//   const { cart } = UseCarts;

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.new_price * product.qty, 0);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="row mb-4 p-3 border rounded shadow-sm">
//               <div className="col-md-3">
//                 <img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: '250px' }} />
//               </div>
//               <div className="col-md-6">
//                 <h5>{item.name}</h5>
//                 <p className="text-danger">Price: ${item.new_price}</p>
//                 <div className="d-flex align-items-center">
//                   <p className="mb-0">Quantity: </p>
//                   <input
//                     type="number"
//                     value={item.qty}
//                     min="1"
//                     className="form-control w-25 ms-2"
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div className="col-md-3 text-end">
//                 <button className="btn btn-danger mb-2">Remove</button>
//                 <p className="fw-bold">Subtotal: ${(item.new_price * item.qty).toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//           <div className="row">
//             <div className="col text-end">
//               <h3 className="fw-bold">Total Price: ${getTotalPrice().toFixed(2)}</h3>
//               <button className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddToCart;





// import React, { useContext } from 'react';
// import { MyContext } from '../../contextFolder/AllContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AddToCart() {
//   const { UseCarts } = useContext(MyContext);
//   const { cart } = UseCarts;

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.new_price * product.qty, 0);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="row mb-4 p-3 border rounded shadow-sm">
//               <div className="col-md-2">
//                 <img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: '200px' }} />
//               </div>
//               <div className="col-md-7">
//                 <h5>{item.name}</h5>
//                 <p className="text-danger">Price: ₹{item.new_price}</p>
//                 <div className="d-flex align-items-center">
//                   <p className="mb-0">Quantity: </p>
//                   <input
//                     type="number"
//                     value={item.qty}
//                     min="1"
//                     className="form-control w-25 ms-2"
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div className="col-md-3 text-end">
//                 <button className="btn btn-danger mb-2">Remove</button>
//                 <p className="fw-bold">Subtotal: ₹{(item.new_price * item.qty).toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//           <div className="row">
//             <div className="col text-end">
//               <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//               <button className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddToCart;


// import React, { useContext } from 'react';
// import { MyContext } from '../../contextFolder/AllContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AddToCart() {
//   const { UseCarts } = useContext(MyContext);
//   const { cart,removeFromCart,byProduct,decrementQuantity,incrementQuantity } = UseCarts;
//   console.log("caaart",cart);
  

//   const getTotalPrice = () => {
//     return cart.reduce((total, product) => total + product.new_price * product.qty, 0);
//   };




//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-center">Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
          
            
//            <div key={item.id} className="col-md-4 mb-4">
//               <div className="card border rounded shadow-sm">
//                 <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.name}</h5>
//                   <p className="card-text text-danger">Price: ₹{item.new_price}</p>
//                   <div className="d-flex align-items-center mb-2">
//                     <p className="mb-0 me-2">Quantity:</p>
                    
//                     <div className="input-group">
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => decrementQuantity(item.id)}
//                       >
//                         -
//                       </button>
//                       <input
//                         type="number"
//                         value={item.qty}
//                         min="1"
//                         className="form-control w-25 text-center"
//                         readOnly
//                       />
//                       <button
//                         className="btn btn-outline-secondary btn-sm"
//                         onClick={() => incrementQuantity(item.id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <button onClick={()=>removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
//                     {/* <button onClick={()=>byProduct()} className="btn btn-warning btn-sm">Buy Now</button> */}
//                     <p className="fw-bold mb-0">Subtotal: ₹{(item.new_price * item.qty).toFixed(2)}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="col-12 text-end mt-4">
//             <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
//             <button onClick={()=>byProduct()} className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );  
// }

// export default AddToCart;

import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../contextFolder/ProductContext';

function AddToCart() {
  // const { UseCarts } = useContext(MyContext);
  // const { cart, removeFromCart, byProduct, decrementQuantity, incrementQuantity } = UseCarts;

      const{incrementQuantity,decrementQuantity,removeFromCart,cartItems,byProduct}= useContext(CartContext)
      // console.log("dsfads",cartItems);
      
  

  // const normalizedCart = Array.isArray(cart) ? cart : [];
  // if (!Array.isArray(cart)) {
  //   console.error('Cart is not an array:', cart);
  //   return null; // Or return an appropriate fallback UI
  // }
         
        
          
  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.new_price * product.qty, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card border rounded shadow-sm">
                <img src={item.image} alt={item.name} className="card-img-top" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-danger">Price: ₹{item.new_price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <p className="mb-0 me-2">Quantity:</p>
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.qty}
                        min="1"
                        className="form-control w-25 text-center"
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
                    <p className="fw-bold mb-0">Subtotal: ₹{(item.new_price * item.qty).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-end mt-4">
            <h3 className="fw-bold">Total Price: ₹{getTotalPrice().toFixed(2)}</h3>
            <button onClick={() => byProduct()} className="btn btn-primary btn-lg mt-3">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );  
}

export default AddToCart;
