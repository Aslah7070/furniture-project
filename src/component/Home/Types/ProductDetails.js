


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



// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../HomeStyleFiles/productDetails.css";
// import { CartContext } from '../../contextFolder/ProductContext';
// import { LoginContext } from '../../contextFolder/UserContext';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useContext(CartContext);
//   const { ProductDatas } = useContext(LoginContext);

//   const [details, setDetails] = useState([]);
//   const [relatedProducts,setRelatedProducts]=useState([])
//   console.log("details",details);
//   console.log("id",id);
//   console.log("ProductDatas",ProductDatas);
  
     
   
     
//   // Filter the product based on details
//   useEffect(() => {
//     let fulldetails=ProductDatas.find((datas) => datas.id == id)
//     console.log("fulldetails",fulldetails);
    
//     setDetails(fulldetails?[fulldetails]:[]);
//     if(fulldetails){
      
//       let relate= ProductDatas.filter((product)=>product.type===fulldetails.type&&product.id!==fulldetails.id)

//       console.log("on datas",relate);
      
// setRelatedProducts(relate)
//     }
//   }, [ProductDatas, id]);

 

//   // Handle the cart button
//   const handleCart = (product) => {
//     addToCart(product);
//   };

//   const handleHome = () => {
//     navigate("/");
//   };

//   const hangleRelated=(productID)=>{
//     navigate(`/productDetails/${productID}`)
//     window.scrollTo({
//       top:0,
//       behavior:'smooth'
//     })
//   }

//   return (
//     <div className="container product-details-page" style={{marginTop:"100px"}}>
//       {details && details.map((product) => (
//         <div key={product.id} className="row">
//           <div className="col-md-6">
//             <div className="product-image-container">
//               <img src={product.image} alt={product.imageCategory} className="product-image" />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="product-info-container">
//               <h2 className="product-name">{product.imageCategory}</h2>
//               <p className="product-detail">{product.details}</p>
//               <p className="product-description">{product.description}</p>
//               <div className="price-section">
//                 <p className="old-price">MRP: ₹{product.price}</p>
//                 <p className="offer-price">Price: ₹{product.offerPrice}</p>
//               </div>
//               <p >Available: {product.quantity} </p>
//               <p className="product-rating">Rating: {product.rating} ★★★★</p>

//               <div className="button-group">
//                 <button className="btn btn-warning add-to-cart-button" onClick={() => handleCart(product)}>Add to Cart</button>
//                 <button className="btn btn-secondary back-to-home-button" onClick={handleHome}>Back to Home</button>
//               </div>
//             </div>
//           </div>
//         </div> 
//       ))}
     

// <div className="container my-4">
//   <div className="row">
//     {
//       relatedProducts.length > 0 ? (
//         relatedProducts.map((product) => (
//           <div className="col-md-2 mb-4" key={product.id}> 
//             <div className="card h-100 text-center"> 
//               <img src={product.image} alt={product.imageCategory} className="card-img-top img-fluid" />
//               <div className="card-body">
//                 <h5 className="card-title">{product.imageCategory}</h5>
//                 <h1 className="card-text text-success">₹{product.offerPrice}</h1>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary w-100" onClick={() =>hangleRelated(product.id)}>View Details</button>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>No related Products</p>
//       )
//     }
//   </div>
// </div>



//     </div>
//   );
// };

// export default ProductDetails;





// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CartContext } from '../../contextFolder/ProductContext';
// import { LoginContext } from '../../contextFolder/UserContext';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useContext(CartContext);
//   const { ProductDatas } = useContext(LoginContext);

//   const [details, setDetails] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   // Filter the product based on details
//   useEffect(() => {
//     let fulldetails = ProductDatas.find((datas) => datas.id === id);
//     setDetails(fulldetails ? [fulldetails] : []);
    
//     if (fulldetails) {
//       const related = ProductDatas.filter(
//         (product) => product.type === fulldetails.type && product.id !== fulldetails.id
//       );
//       setRelatedProducts(related);
//     }
//   }, [ProductDatas, id]);

//   // Handle the cart button
//   const handleCart = (product) => {
//     addToCart(product);
//   };

//   const handleHome = () => {
//     navigate("/");
//   };

//   const handleRelated = (productID) => {
//     navigate(`/productDetails/${productID}`);
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <div className="container mx-auto mt-56 px-4 ">
//       {details && details.map((product) => (
//         <div key={product.id} className="flex flex-col md:flex-row items-start md:space-x-6 border border-gray-300 rounded-lg">
//           <div className="md:w-1/2 w-full mb-6 md:mb-0">
//             <div className="p-14 overflow-hidden">
//               <img src={product.image} alt={product.imageCategory} className="object-cover w-72 h-72" />
//             </div>
//           </div>
//           <div className="md:w-1/2 w-full">
//             <div className="space-y-4">
//               <h2 className="text-2xl font-bold">{product.imageCategory}</h2>
//               <p className="text-gray-700">{product.details}</p>
//               <p className="text-gray-600">{product.description}</p>
//               <div className="space-y-2">
//                 <p className="line-through text-red-500">MRP: ₹{product.price}</p>
//                 <p className="text-green-600 font-semibold">Price: ₹{product.offerPrice}</p>
//               </div>
//               <p>Available: {product.quantity}</p>
//               <p className="text-yellow-500">Rating: {product.rating} ★★★★</p>
//               <div className="flex space-x-4 mt-4">
//                 <button 
//                   className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//                   onClick={() => handleCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//                 <button 
//                   className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                   onClick={handleHome}
//                 >
//                   Back to Home
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="my-8">
//         <h3 className="text-lg font-semibold mb-4">Related Products</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {relatedProducts.length > 0 ? (
//             relatedProducts.map((product) => (
//               <div key={product.id} className="border border-gray-200 rounded-lg shadow hover:shadow-lg">
//                 <img 
//                   src={product.image} 
//                   alt={product.imageCategory} 
//                   className="h-40 w-full object-cover border-b border-gray-200 rounded-t-lg"
//                 />
//                 <div className="p-4">
//                   <h5 className="text-lg font-semibold">{product.imageCategory}</h5>
//                   <p className="text-green-600 font-bold">₹{product.offerPrice}</p>
//                 </div>
//                 <div className="p-4">
//                   <button 
//                     className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
//                     onClick={() => handleRelated(product.id)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No related products</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contextFolder/ProductContext';
import { LoginContext } from '../../contextFolder/UserContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { ProductDatas } = useContext(LoginContext);

  const [details, setDetails] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Filter the product based on details
  useEffect(() => {
    let fulldetails = ProductDatas.find((datas) => datas._id === id);
    setDetails(fulldetails ? [fulldetails] : []);
    
    if (fulldetails) {
      const related = ProductDatas.filter(
        (product) => product.type === fulldetails.type && product._id !== fulldetails.id
      );
      setRelatedProducts(related);
    }
  }, [ProductDatas, id]);

  // Handle the cart button
  const handleCart = (product) => {
    addToCart(product);
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleRelated = (productID) => {
    navigate(`/productDetails/${productID}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      {details && details.map((product) => (
        <div key={product.id} className="flex flex-col md:flex-row items-start md:space-x-6 border border-gray-300 rounded-lg p-6">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <div className="overflow-hidden">
              <img src={product.image} alt={product.imageCategory} className="object-cover w-full h-72 rounded-md" />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">{product.imageCategory}</h2>
              <p className="text-gray-700">{product.details}</p>
              <p className="text-gray-600">{product.description}</p>
              <div className="space-y-2">
                <p className="line-through text-red-500">MRP: ₹{product.price}</p>
                <p className="text-green-600 font-semibold">Price: ₹{product.offerPrice}</p>
              </div>
              <p>Available: {product.quantity}</p>
              <p className="text-yellow-500">Rating: {product.rating} ★★★★</p>
              <div className="flex space-x-4 mt-6">
                <button 
                  className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition duration-200"
                  onClick={() => handleCart(product)}
                >
                  Add to Cart
                </button>
                <button 
                  className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-200"
                  onClick={handleHome}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="my-12">
        <h3 className="text-xl font-semibold mb-6">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
                <img 
                  src={product.image} 
                  alt={product.imageCategory} 
                  className="h-56 w-full object-cover border-b border-gray-200 rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800">{product.imageCategory}</h5>
                  <p className="text-green-600 font-bold">₹{product.offerPrice}</p>
                </div>
                <div className="p-4">
                  <button 
                    className="bg-blue-500 text-white w-full py-3 rounded-full hover:bg-blue-600 transition duration-200"
                    onClick={() => handleRelated(product.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No related products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
