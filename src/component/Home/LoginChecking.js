
// import React, { useContext } from 'react';

// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// const LoginChecking = () => {
    
//     const navigate= useNavigate()
//    const {activeUser,setActiveUser}= useContext(LoginContext)
//     const{cleareCartItem}= useContext(CartContext)
   
//     const userName = activeUser?.username;
//     const email = activeUser?.email;


//     const handlelogout=()=>{
//         setActiveUser(null)
//         cleareCartItem()
//         localStorage.removeItem("activeUserData")
        
      
//         navigate("/userchecking")
//       }
//     console.log("login checking", activeUser);
//     if (!activeUser) {
//         // return (
//         //     <div className="bg-danger text-white h-100 d-flex flex-column justify-content-center align-items-center">
//         //         <p className="display-4">User Not Available!</p>
//         //         <Link to="/login" className="btn btn-primary mt-3">
//         //             Please Login
//         //         </Link>
//         //     </div>
//         // );
//         navigate("/login")
//     }else{
//         return (
//             <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//                 <div className="card w-100" style={{ maxWidth: '500px' }}>
//                     <div className="card-body text-center">
//                         <FaUser className="w-50 h-50 mb-3" />
//                         <h2 className="card-title">{userName}</h2>
//                         <p className="card-text text-muted">An active user</p>
//                         <p className="card-text">Email Address: {email}</p>
//                         <button className="btn btn-danger me-2" onClick={handlelogout}>Log out</button>
//                         <Link to="/" className="btn btn-primary">
//                             Back to Home
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

    
// }

// export default LoginChecking;
