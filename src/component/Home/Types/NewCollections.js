// import React, { useContext, useEffect, useState } from 'react'

// import { Link } from 'react-router-dom'
// import { LoginContext } from '../../contextFolder/UserContext'

// const NewCollections = () => {

//    const{ProductDatas}= useContext(LoginContext)   
// //    console.log( "new cate",ProductDatas);
   
//    const [newColl,setNewColl]=useState([])
  
   
//    useEffect(()=>{
//             setNewColl(ProductDatas&&ProductDatas.filter((datas)=>datas.newCollections===true))
//    },[ProductDatas])
//    return (
//     <div className="container mt-5" >
//         <h1 className="mb-4">New Collections</h1>
        
//         <div className="row">
//             {newColl && newColl.map((datas) => (
//                 <Link className="col-md-3 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>
//                     <div className="card">
//                         <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
//                         <div className="card-body">
//                         <h5 className='card-title'>{datas.imageCategory}</h5>
//                   <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}.00</p>
//                   <h4 className="card-text fw-bold text-success">₹ {datas.offerPrice}.00</h4>
//                         </div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
        
//     </div>
// );
// }

// export default NewCollections







import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../../contextFolder/UserContext';

const Furniture = () => {
  const { ProductDatas } = useContext(LoginContext);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto mt-12 px-4 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ProductDatas && ProductDatas.slice(0, 12).map((data) => (
          <Link 
            key={data.id} 
            className="block text-center no-underline" 
            to={`/productDetails/${data.id}`}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative max-w-xs mx-auto">
              <div className="relative overflow-hidden">
                <img
                  src={data.image}
                  alt={data.imageCategory}
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                />
                
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-2xs font-bold px-2 py-1 rounded">
                  New
                </span>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>

                {/* Wishlist and Cart Icons */}
                <div className="absolute top-2 left-2 flex space-x-3 bg-neutral-400 rounded-full p-1">
                  <button
                    onClick={() => handleAddToWishlist(data)}
                    className="p-2 bg-transparent rounded-full shadow-md hover:bg-red-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faHeart} className="text-xl text-white" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(data)}
                    className="p-2 bg-transparent rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-green-100">
                <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {data.imageCategory}
                </h5>
                <p className="text-gray-600 mb-2 line-through">
                  Price: <span className="text-gray-800">₹{data.price}.00</span>
                </p>
                <p className="text-green-500 font-bold">₹{data.offerPrice}.00</p>
                
                <button className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition duration-300 mt-3">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Furniture;
