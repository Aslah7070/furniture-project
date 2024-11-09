// import React, { useContext } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';

// import { FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { LoginContext } from '../contextFolder/UserContext';



// const Login = () => {


//        const{handleSubmission,handleChange,datas,activeUser,setActiveUser}= useContext(LoginContext)
//        const userName = activeUser?.username;
//        const email = activeUser?.email;
//        const handlelogout=()=>{
//         setActiveUser(null)
        
//         localStorage.removeItem("activeUserData")
//       }
//  if(!activeUser){
//   return (
    
    
//     <Container className="mt-5" style={{ maxWidth: '400px' }}>
//       <h2>Sign In</h2>
//       <Form onSubmit={handleSubmission}>
//         <Form.Group controlId="formUsername" className="mb-3">

//           <Form.Control type="text" placeholder="Enter your username" required onChange={handleChange}
//           value={datas.username} name="username"
//           />
//         </Form.Group>

//         <Form.Group controlId="formPassword" className="mb-3">

//           <Form.Control type="password" placeholder="Enter your password" 
//           required onChange={handleChange} 
//           value={datas.password}
//           name="password"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//          Log In
//         </Button> 
      
//         <p className='font-semibold'>you don't have an account? <Link className='text-blue-900 text-decoration-none' to={'/signup'}>Create an account</Link></p>
//       </Form>
//     </Container>
//   );
//  }else{
//   return (
//     <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//         <div className="card w-100" style={{ maxWidth: '500px' }}>
//             <div className="card-body text-center">
//                 <FaUser className="w-50 h-50 mb-3" />
//                 <h2 className="card-title">{userName}</h2>
//                 <p className="card-text text-muted">An active user</p>
//                 <p className="card-text">Email Address: {email}</p>
//                 <button className="btn btn-danger me-2" onClick={handlelogout}>Log out</button>
//                 <Link to="/" className="btn btn-primary">
//                     Back to Home
//                 </Link>
//             </div>
//         </div>
//     </div>
// );
//  }
  
// };

// export default Login;












import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';
import register from "../../assets/registerBG1.jpg";
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const { handleSubmission, handleChange, datas, activeUser, setActiveUser } = useContext(LoginContext);
  const userName = activeUser?.username;
  const email = activeUser?.email;

  const handleLogout = async() => {
    // setActiveUser(null);
    // localStorage.removeItem("activeUserData");
    await axios.post("http://localhost:3000/logout")
    Cookies.remove("user");
    Cookies.remove("token")
    setActiveUser(null)
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${register})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {!activeUser ? (
        <div className="relative w-full max-w-lg p-8 bg-transparent bg-opacity-80 rounded-xl shadow-lg border-2 border-white">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Sign In</h2>
          <form onSubmit={handleSubmission} className="grid grid-cols-1 gap-4">
            {/* Username Input */}
            <div className="flex items-center border-b-2 border-white p-2 rounded">
              {/* <span className="material-icons text-white mr-2">account_circle</span> */}
              <input
                type="text"
                placeholder="Enter your username"
                required
                onChange={handleChange}
                value={datas.username}
                name="username"
                className="bg-transparent text-white w-full focus:outline-none"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border-b-2 border-white p-2 rounded">
              {/* <span className="material-icons text-white mr-2">lock</span> */}
              <input
                type="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                value={datas.password}
                name="password"
                className="bg-transparent text-white w-full focus:outline-none"
              />
            </div>

            {/* Log In Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 bg-white text-blue-800 font-bold rounded-full hover:bg-gray-200 transition duration-300"
            >
              Log In
            </button>

            {/* Link to Signup */}
            <p className="mt-4 text-center text-white">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-800">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      ) : (
        
        <div className="relative w-full max-w-lg p-8 bg-transparent bg-opacity-90 rounded-xl shadow-lg border-2 border-gray-300 text-center">
  <FaUser className="w-24 h-24 text-white mx-auto mb-4" /> {/* Increased size of the icon */}
  <h2 className="text-3xl font-bold mb-2 text-white">{userName}</h2> {/* Adjusted font size and weight */}
  <p className="text-white mb-1">An active user</p> {/* Font color adjustment */}
  <p className="text-white mb-6">Email Address: {email}</p> {/* Font color adjustment */}
  
  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-semibold mr-2"
  >
    Log out
  </button>
  
  <Link
    to="/"
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold no-underline" 
  >
    Back to Home
  </Link>
</div>

      )}
    </div>
  );
};

export default Login;


