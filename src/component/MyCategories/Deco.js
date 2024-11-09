// import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../contextFolder/UserContext';

// const Deco = () => {
//   const {ProductDatas}= useContext(LoginContext);
//  const [decor,setDecor]= useState([]);
//  console.log("on decor",ProductDatas);
 

//  useEffect(()=>{
//          setDecor(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="Decoretion Furniture"))
//  },[ProductDatas])

//  return (
//     <div className="container "style={{marginTop:"100px"}}>
//         {/* <h1 className="mb-4">Decoration Collections</h1> */}
 
//         <div className="row">
//             {decor && decor.map((datas) => (
//                 <Link className="col-md-2 mb-4 text-decoration-none" key={datas.id} to={`/ProductDetails/${datas.id}`}>
//                     <div className="card">
//                         <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">{datas.imageCategory}</h5>
//                             <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}</p>
//                             <p className="card-text">₹{datas.offerPrice}</p>
//                         </div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     </div>
// );
// }

// export default Deco





import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Deco = () => {
    const { ProductDatas } = useContext(LoginContext);
    const [decor, setDecor] = useState([]);
    console.log("hds",decor);
    

    
      useEffect(()=>{
         setDecor(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="Decoretion Furniture"))
 },[ProductDatas])

    return (
        <div className="container mx-auto mt-12 px-4 pt-20">
            

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {decor && decor.map((datas) => (
                    <Link
                        className="block text-center no-underline"
                        key={datas.id}
                        to={`/ProductDetails/${datas._id}`}
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative max-w-xs mx-auto">
                            <div className="relative overflow-hidden">
                                <img
                                    src={datas.image}
                                    alt={datas.imageCategory}
                                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                                    New
                                </span>

                                {/* Wishlist and Cart Icons */}
                                <div className="absolute top-2 left-2 flex space-x-3">
                                    <button className="p-2 bg-transparent rounded-full shadow-md hover:bg-red-600 transition duration-300">
                                        <FontAwesomeIcon icon={faHeart} className="text-xl sm:text-2xl" />
                                    </button>
                                    <button className="p-2 bg-transparent rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl sm:text-2xl" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 bg-green-100">
                                <h5 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                                    {datas.imageCategory}
                                </h5>
                                <p className="text-red-600 text-sm font-bold line-through mb-1">₹{datas.price}</p>
                                <p className="text-gray-800 text-lg font-bold">₹{datas.offerPrice}</p>
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

export default Deco;

