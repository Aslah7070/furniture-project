



// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import './signup.css';

// function Signup() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//     password: '',
//     conformpassword: '',
//     cart: []
//   });

//   const [errors, setErrors] = useState({});

//   const [focus, setFocus] = useState({
//     errname: false,
//     erremail: false,
//     errpassword: false,
//     errconformpassword: false,
//   });

//   const validateCpassword = () => {
//     const newErrors = { ...errors }; // Renaming the variable to avoid conflict

//     if (!inputs.conformpassword) {
//       newErrors.conformpassword = "Confirm password is required";
//     } else if (inputs.password !== inputs.conformpassword) {
//       newErrors.conformpassword = "Passwords do not match";
//       console.log();
      
//     } else {
//       delete newErrors.conformpassword; // Remove error if passwords match
//     }

//     setErrors(newErrors); // Update state with the new errors object
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     if (validateCpassword()) {
//       alert("Successfully signed up");
//     }
//   };

//   const handlechange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs({ ...inputs, [name]: value });
//   };

//   return (
//     <div className="container">
//       <Container className="mt-5" style={{ maxWidth: '400px' }}>
//         <h2>Signup</h2>
//         <Form onSubmit={handlesubmit}>
//           <Form.Group controlId="formUsername" className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               pattern="^[A-Za-z0-9].{2,16}"
//               placeholder="Enter your username"
//               name="username"
//               value={inputs.username}
//               onChange={handlechange}
//               onBlur={() => setFocus({ ...focus, errname: true })}
//               focus={focus.errname.toString()}
//               required
//             />
//             <span>Username should have 3-16 characters</span>
//           </Form.Group>
//           <Form.Group controlId="email" className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Email ID"
//               name="email"
//               value={inputs.email}
//               onChange={handlechange}
//               onBlur={() => setFocus({ ...focus, erremail: true })}
//               focus={focus.erremail.toString()}
//               required
//             />
//             <span>Enter a valid email ID</span>
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="text"
//               pattern="(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
//               placeholder="Enter your password"
//               name="password"
//               value={inputs.password}
//               onChange={handlechange}
//               onBlur={() => setFocus({ ...focus, errpassword: true })}
//               focus={focus.errpassword.toString()}
//               required
//             />
//             <span>Password must have 8 characters and include at least 1 uppercase, 1 digit, and 1 special character</span>
//           </Form.Group>
//           <Form.Group controlId="conformpassword" className="mb-3">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Confirm your password"
//               name="conformpassword"
//               value={inputs.conformpassword}
//               onChange={handlechange}
//               onBlur={() => setFocus({ ...focus, errconformpassword: true })}
//               focus={focus.errconformpassword.toString()}
//               required
//             />
//             <span>{errors.conformpassword}</span>
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Sign Up
//           </Button>

//           <Form.Group controlId="formBasicCheckbox" className="mb-3">
//             <Form.Check type="checkbox" label="Remember me" />
//           </Form.Group>
//         </Form>
//       </Container>
//     </div>
//   );
// }

// export default Signup;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    phonenumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = () => {
    let errors = {};
    // ... validation logic for fields here
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://localhost:3000/signup", inputs);
        console.log("User registered", response.data);
        // Reset inputs and navigate
        alert("registerrd success fully")
        navigate('/login'); // Adjust this as needed
      } catch (err) {
        console.error("Error registering user", err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-500">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              value={inputs.phonenumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;








// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import aslah5 from "../../assets/Aslah5.jpg"; // Ensure this is the correct path to your image
// import register from "../../assets/registerBG1.jpg"; // Ensure this is the correct path to your image

// function Signup() {
//   const navigate = useNavigate();

//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//     phonenumber: '',
//     address: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const validate = () => {
//     let errors = {};
//     // ... validation logic for fields here
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:3000/signup", inputs);
//         console.log("User registered", response.data);
//         alert("Registered successfully");
//         navigate('/login'); // Adjust this as needed
//       } catch (err) {
//         console.error("Error registering user", err);
//       }
//     }
//   };

//   return (
//     <div 
//       className="flex items-center justify-center min-h-screen bg-cover bg-center" 
//       style={{ backgroundImage: `url(${register})` }}
//     >
//       {/* bg-opacity-70 bg-gradient-to-r from-purple-800 to-blue-800 */}
//       <div className="w-full max-w-lg p-8 bg-transparent  rounded-xl shadow-lg text-white">
//         <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Full Name */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">person</span>
//             <input
//               type="text"
//               name="username"
//               placeholder="Full Name"
//               value={inputs.username}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//           </div>

//           {/* Username */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">account_circle</span>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={inputs.username}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//           </div>

//           {/* Email */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">email</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={inputs.email}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Phone Number */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">phone</span>
//             <input
//               type="tel"
//               name="phonenumber"
//               placeholder="Phone Number"
//               value={inputs.phonenumber}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
//           </div>

//           {/* Password */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">lock</span>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={inputs.password}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           {/* Confirm Password */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">lock</span>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={inputs.confirmPassword}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
//           </div>
//         </form>

//         {/* Newsletter Checkbox */}
//         <div className="flex items-center mt-4">
//           <input type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-400 rounded" />
//           <label className="ml-2 text-sm text-white">Send me E-mails about the News.</label>
//         </div>

//         {/* Register Button */}
//         <button className="w-full mt-6 py-3 bg-white text-blue-800 font-bold rounded-full hover:bg-gray-200 transition duration-300">
//           Register
//         </button>
//       </div>

//       {/* Material Icons Link */}
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//     </div>
//   );
// }

// export default Signup;







// last one=-------=-=========-=-----------=-=======

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import register from "../../assets/registerBG1.jpg";

// function Signup() {
//   const navigate = useNavigate();

//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//     phonenumber: '',
//     address: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const validate = () => {
//     let errors = {};
//     // ... validation logic for fields here
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:3000/signup", inputs);
//         console.log("User registered", response.data);
//         alert("Registered successfully");
//         navigate('/login'); // Adjust this as needed
//       } catch (err) {
//         console.error("Error registering user", err);
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500" style={{ backgroundImage: `url(${register})`, backgroundSize: 'cover' }}>
//       <div className="w-full max-w-lg p-8 bg-transparent rounded-xl shadow-lg text-white border-4 border-white">
//         <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Full Name */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">person</span>
//             <input
//               type="text"
//               name="username"
//               placeholder="Full Name"
//               value={inputs.username}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//           </div>

//           {/* Username */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">account_circle</span>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={inputs.username}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//           </div>

//           {/* Email */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">email</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={inputs.email}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Phone Number */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">phone</span>
//             <input
//               type="tel"
//               name="phonenumber"
//               placeholder="Phone Number"
//               value={inputs.phonenumber}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
//           </div>

//           {/* Password */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">lock</span>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={inputs.password}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           {/* Confirm Password */}
//           <div className="flex items-center border-b-2 border-white p-2 rounded">
//             <span className="material-icons text-white mr-2">lock</span>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={inputs.confirmPassword}
//               onChange={handleChange}
//               className="bg-transparent text-white w-full focus:outline-none"
//             />
//             {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
//           </div>
//         </form>

//         {/* Newsletter Checkbox */}
//         <div className="flex items-center mt-4">
//           <input type="checkbox" className="h-4 w-4 text-blue-500 focus:ring-blue-400 rounded" />
//           <label className="ml-2 text-sm text-white">Send me E-mails about the News.</label>
//         </div>

//         {/* Register Button */}
//         <button className="w-full mt-6 py-3 bg-white text-blue-800 font-bold rounded-full hover:bg-gray-200 transition duration-300">
//           Register
//         </button>
//       </div>

//       {/* Material Icons Link */}
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
//     </div>
//   );
// }

// export default Signup;














