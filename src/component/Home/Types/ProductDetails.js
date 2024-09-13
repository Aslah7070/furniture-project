


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
//  import "../HomeStyleFiles/productDetails.css";
// import { CartContext } from '../../contextFolder/ProductContext';
// import { LoginContext } from '../../contextFolder/UserContext';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
 
//                  const{addToCart}= useContext(CartContext)
//                 const{ProductDatas}= useContext(LoginContext)

//   const [details, setDetails] = useState([]);
 

// //filter the product based on details
//   useEffect(() => {
//     setDetails(ProductDatas && ProductDatas.filter((datas) => datas.id === id))

    
//   }, [ProductDatas, id]);


//   //handle the cart button
//   const handleCart = (product) => {
//     //call the add to cart function
//     addToCart(product);
//   };

//   const handleHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Product Details</h1>

//       <div className="row ">
//         {details && details.map((product) => (
//           <div key={product.id} className="col-md-12">
//             <div className="row">
//               <div className="col-md-6 mb-4">
//                 <div className="card border-0">
//                   <img src={product.image} alt={product.name} className="card-img-top product-image" />
//                 </div>
//               </div>
//               <div className="col-md-6 mb-4">
//                 <div className="card border-0 p-4">
//                   <div className="card-body">
//                     <h2 className="product-name">{product.name}</h2>
//                     <p className="product-detail">{product.detailOne}</p>
//                     <p className="product-description">{product.description}</p>
//                     <div className="price-section">
                    
//                       <p className="old-price text-muted">MRP: ₹{product.old_price}</p>
//                       <p className="offer-price text-danger">price: ₹{product.new_price}</p>
//                     </div>
//                     <p className="product-rating">Rating: {product.rating} ☆☆☆☆</p>
                    
//                     <h4 className="product-emi">EMI starting from: ₹{product.emi}</h4>
//                     <h4 className="product-shipping">Shipping in {product.shippingTiming} day(s)</h4>
//                     <div className="d-flex flex-column mt-4">
//                       <button className="btn btn-warning mb-2" onClick={() => handleCart(product)}>Add to Cart</button>
//                       <button className="btn btn-secondary" onClick={() => handleHome()}>Back to Home</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default ProductDetails;



import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../HomeStyleFiles/productDetails.css";
import { CartContext } from '../../contextFolder/ProductContext';
import { LoginContext } from '../../contextFolder/UserContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { ProductDatas } = useContext(LoginContext);

  const [details, setDetails] = useState([]);

  // Filter the product based on details
  useEffect(() => {
    setDetails(ProductDatas && ProductDatas.filter((datas) => datas.id === id));
  }, [ProductDatas, id]);

  // Handle the cart button
  const handleCart = (product) => {
    addToCart(product);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5 product-details-page">
      {details && details.map((product) => (
        <div key={product.id} className="row">
          <div className="col-md-6">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info-container">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-detail">{product.detailOne}</p>
              <p className="product-description">{product.description}</p>
              <div className="price-section">
                <p className="old-price">MRP: ₹{product.old_price}</p>
                <p className="offer-price">Price: ₹{product.new_price}</p>
              </div>
              <p className="product-rating">Rating: {product.rating} ★</p>
              <p className="product-emi">EMI starting from ₹{product.emi}</p>
              <p className="product-shipping">Ships in {product.shippingTiming} day(s)</p>

              <div className="button-group">
                <button className="btn btn-warning add-to-cart-button" onClick={() => handleCart(product)}>Add to Cart</button>
                <button className="btn btn-secondary back-to-home-button" onClick={handleHome}>Back to Home</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

