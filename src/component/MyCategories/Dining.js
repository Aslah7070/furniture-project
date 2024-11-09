// import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { LoginContext } from '../contextFolder/UserContext'

// const Dining = () => {

//    const {ProductDatas}= useContext(LoginContext)
//    const [dining,setDining]=useState([])
//  useEffect(()=>{
//     setDining(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="Dining Room Furniture"))
//  },[ProductDatas])

//  return (
//     <div className="container" style={{marginTop:"100px"}}>
//         <h1 className="mb-4">Dining Collections</h1>

//         <div className="row">
//             {dining && dining.map((datas) => (
//                 <Link className="col-md-2 mb-4 text-decoration-none" key={datas.id} to={`/ProductDetails/${datas.id}`}>
//                     <div className="card">
//                         <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">{datas.imageCategory}</h5>
//                             <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}.00</p>
//                             <p className="card-text">₹{datas.price}</p>
//                         </div>
//                     </div>
//                 </Link>
//             ))}
//         </div>
//     </div>
// );
// }

// export default Dining



import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Dining = () => {
    const { ProductDatas } = useContext(LoginContext);
    const [dining, setDining] = useState([]);

    useEffect(() => {
        setDining(ProductDatas && ProductDatas.filter((datas) => datas.category === "Dining Room Furniture"));
    }, [ProductDatas]);

    return (
        <div className="container mx-auto mt-12 px-4 pt-20">
            {/* <h1 className="text-3xl font-semibold mb-8 text-center">Dining Collections</h1> */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dining && dining.map((datas) => (
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

                                <div className="absolute top-2 left-2 flex space-x-3">
                                    <button className="p-2 bg-red-600 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300">
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
                                {/* <p className="text-red-600 text-sm font-bold line-through mb-1">₹{datas.price}.00</p> */}
                                <p className="text-gray-800 text-lg font-bold">₹{datas.price}</p>
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

export default Dining;

