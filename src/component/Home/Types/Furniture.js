// import React, { useContext } from 'react'

// import { Link } from 'react-router-dom';
// import { LoginContext } from '../../contextFolder/UserContext';


// const Furniture = () => {
//     // const { ProductDatas } = useContext(MyContext);
//     const { ProductDatas }=useContext(LoginContext)
//     console.log("from home ds");
  
//     return (
//       <div className='bg-white p-4' style={{marginTop:"80px"}}>
//         {/* <div className='containerImage'>
         
//         </div> */}
                 
//         <div className='row mt-4'>
//           <h1>Furniture</h1>
//           {
    
//           ProductDatas && ProductDatas.map((data) => (
//             <Link key={data.id} className='col-md-3 mb-4 text-decoration-none' to={`/productDetails/${data.id}`}>
//               <div className='card h-100'>
//                 <img src={data.image} className='card-img-top' alt={data.imageCategory} />
//                 <div className='card-body'>
//                   <h5 className='card-title'>{data.imageCategory}</h5>
//                   <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {data.price}.00</p>
//                   <h4 className="card-text fw-bold text-success">₹{data.offerPrice}.00</h4>
                
//                 </div>
//               </div>
//             </Link>
//           )).slice(0,9)
//           }
//         </div>
  
        
//       </div>
//     );
// }

// export default Furniture








// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../../contextFolder/UserContext';

// const Furniture = () => {
//   const { ProductDatas } = useContext(LoginContext);
//   console.log("from home ds");

//   return (
//     <div className='bg-white p-4 mt-20'>
//       <h1 className='text-2xl font-bold mb-4'>Furniture</h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//         {ProductDatas && ProductDatas.map((data) => (
//           <Link key={data.id} className='group block mb-4' to={`/productDetails/${data.id}`}>
//             <div className='card rounded-lg shadow-md overflow-hidden'>
//               <img src={data.image} className='w-full h-48 object-cover' alt={data.imageCategory} />
//               <div className='p-4'>
//                 <h5 className='text-lg font-semibold no-underline'>{data.imageCategory}</h5>
//                 <p className="text-red-500 line-through">₹ {data.price}.00</p>
//                 <h4 className="text-green-500 font-bold">₹{data.offerPrice}.00</h4>
//               </div>
//             </div>
//           </Link>
//         )).slice(0, 9)}
//       </div>
//     </div>
//   );
// }

// export default Furniture;




// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../../contextFolder/UserContext';

// const Furniture = () => {
//   const { ProductDatas } = useContext(LoginContext);
//   console.log("from home ds");

//   return (
//     <div className='bg-transparent p-4 mt-20'>
//       {/* <h1 className='text-2xl font-bold mb-4'>Furniture</h1> */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//         {ProductDatas && ProductDatas.map((data) => (
//           <Link key={data.id} className='group block mb-4 no-underline' to={`/productDetails/${data.id}`}>
//             <div className='card rounded-lg shadow-md overflow-hidden'>
//               <img src={data.image} className='w-full h-48 object-cover' alt={data.imageCategory} />
//               <div className='p-4'>
//                 <h5 className='text-lg font-semibold'>{data.imageCategory}</h5>
//                 <p className="text-red-500 line-through">₹ {data.price}.00</p>
//                 <h4 className="text-green-500 font-bold">₹{data.offerPrice}.00</h4>
//               </div>
//             </div>
//           </Link>
//         )).slice(0, 12)}
//       </div>
//     </div>
//   );
// }

// export default Furniture;







import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../../contextFolder/UserContext';

const Furniture = () => {
  const { ProductDatas } = useContext(LoginContext);
  console.log("dhfkj",ProductDatas);
  

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
                  <button className="p-2 bg-transparent rounded-full shadow-md hover:bg-red-600 transition duration-300">
                    <FontAwesomeIcon icon={faHeart} className="text-xl text-white" />
                  </button>
                  <button className="p-2 bg-transparent rounded-full shadow-md hover:bg-blue-600 transition duration-300">
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
