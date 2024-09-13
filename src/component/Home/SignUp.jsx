



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











// // RegistrationForm.js
// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import './signup.css';
// import axios from "axios"

// function RegistrationForm() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     cart:[]
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const validate = () => {
//     let errors = {};

//     // Username validation
//     if (!inputs.username) {
//       errors.username = 'Username is required.';
//     } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
//       errors.username = 'Username should be 3-16 characters and alphanumeric.';
//     }

//     // Email validation
//     if (!inputs.email) {
//       errors.email = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
//       errors.email = 'Email address is invalid.';
//     }

//     // Password validation
//     if (!inputs.password) {
//       errors.password = 'Password is required.';
//     } else if (!/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(
//       inputs.password)) {
//       errors.password = 'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//     }

//     // Confirm Password validation
//     if (!inputs.cpassword) {
//       errors.cpassword = 'Confirm password is required.';
//     } else if (inputs.password !== inputs.cpassword) {
//       errors.cpassword = 'Passwords do not match.';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert('Form submitted successfully!', inputs);
//       // You can handle form submission here (e.g., send data to backend)
//     }

//     try{
//      const response= await axios.post("http://localhost:3000/Users",inputs)

//      console.log("user registered " ,response.data);
//      //cleare the form datas
//                 setInputs({
//                   username: '',
//                   email: '',
//                   password: '',
//                   cpassword: '',
//                   cart:[]
//                 })
//     }catch(errr){
//         console.log("user registered error", errr);
        
//     }

    
//   };

//   return (
//     <Container style={{ maxWidth: '500px' }}>
//       <h2>Register</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formUsername" className="mb-3">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="username"
//             value={inputs.username}
//             onChange={handleChange}
//             isInvalid={!!errors.username}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.username}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formEmail" className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={inputs.email}
//             onChange={handleChange}
//             isInvalid={!!errors.email}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.email}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formPassword" className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="text"
//             name="password"
//             value={inputs.password}
//             onChange={handleChange}
//             isInvalid={!!errors.password}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.password}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group controlId="formCPassword" className="mb-3">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="text"
//             name="cpassword"
//             value={inputs.cpassword}
//             onChange={handleChange}
//             isInvalid={!!errors.cpassword}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.cpassword}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default RegistrationForm;


//   import React, { useState } from 'react';
//   import { Form, Button, Container } from 'react-bootstrap';
//   import './signup.css';
// // import { MyContext } from '../contextFolder/AllContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

  

//   function Signup() {
    


//     const navigate=useNavigate()

//     const [inputs, setInputs] = useState({
//         username: '',
//         fullname:"",
//         email: '',
//         phonenumber:"",
//         gender:"",
//         address:"",
//         password: '',
//         cpassword: '',
//         admin:false,
//         blocked: false,  
//         cart: []
//       });
  
//       const [errors, setErrors] = useState({});
  
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setInputs({ ...inputs, [name]: value });
//       };
  
//       const validate = () => {
//         let errors = {};
  
//         // Username validation
//         if (!inputs.username) {
//           errors.username = 'Username is required.';
//         } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
//           errors.username = 'Username should be 3-16 characters and alphanumeric.';
//         }
  
//         // Email validation
//         if (!inputs.email) {
//           errors.email = 'Email is required.';
//         } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
//           errors.email = 'Email address is invalid.';
//         }
  
//         // Password validation
//         if (!inputs.password) {
//           errors.password = 'Password is required.';
//         } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)) {
//           errors.password = 'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//         }
  
//         // Confirm Password validation
//         if (!inputs.cpassword) {
//           errors.cpassword = 'Confirm password is required.';
//         } else if (inputs.password !== inputs.cpassword) {
//           errors.cpassword = 'Passwords do not match.';
//         }
  
//         setErrors(errors);
//         //here return the validation if error state object keys length is 0
//         return Object.keys(errors).length === 0;
//       };
  
//       const handleSubmit = async (e) => {
//         //preventing the default behavior of the browser
//         e.preventDefault();

//         //checking the return validation result is true
//         if (validate()) {
         
  
//           try {
//             //  inputs state datas post the data to users localhost json-server
//             const response = await axios.post("http://localhost:4000/Users", inputs);
  
//             console.log("User registered", response.data);
//             // Clear the form data
//             setInputs({
//               username: '',
//               email: '',
//               password: '',
//               cpassword: '',
//               cart: []
//             });
  
//             alert(" registration sucesssfully")
//             navigate("/login")
            
//           } catch (err) {
//             console.error("Error registering user", err);
//           }
//         }
   
//       };


//     return (
//       <Container style={{ maxWidth: '500px' }}>
//         <h2>Register</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formUsername" className="mb-3">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               value={inputs.username}
//               onChange={handleChange}
//               isInvalid={!!errors.username}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.username}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formEmail" className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={inputs.email}
//               onChange={handleChange}
//               isInvalid={!!errors.email}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.email}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={inputs.password}
//               onChange={handleChange}
//               isInvalid={!!errors.password}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.password}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formCPassword" className="mb-3">
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="cpassword"
//               value={inputs.cpassword}
//               onChange={handleChange}
//               isInvalid={!!errors.cpassword}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.cpassword}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Register
//           </Button>
//         </Form>
//       </Container>
//     );
//   }

//   export default Signup;





import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    fullname: '',
    email: '',
    phonenumber: '',
    gender: '',
    address: '',
    password: '',
    cpassword: '',
    admin: false,
    blocked: false,
    cart: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const validate = () => {
    let errors = {};

    // Username validation
    if (!inputs.username) {
      errors.username = 'Username is required.';
    } else if (!/^[A-Za-z0-9]{3,16}$/.test(inputs.username)) {
      errors.username = 'Username should be 3-16 characters and alphanumeric.';
    }

    // Fullname validation
    if (!inputs.fullname) {
      errors.fullname = 'Full name is required.';
    }

    // Email validation
    if (!inputs.email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      errors.email = 'Email address is invalid.';
    }

    // Password validation
    if (!inputs.password) {
      errors.password = 'Password is required.';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,16}$/.test(inputs.password)) {
      errors.password = 'Password must be 8-16 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    // Confirm Password validation
    if (!inputs.cpassword) {
      errors.cpassword = 'Confirm password is required.';
    } else if (inputs.password !== inputs.cpassword) {
      errors.cpassword = 'Passwords do not match.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post("http://localhost:4000/Users", inputs);
        console.log("User registered", response.data);

        setInputs({
          username: '',
          fullname: '',
          email: '',
          phonenumber: '',
          gender: '',
          address: '',
          password: '',
          cpassword: '',
          cart: [],
        });

        alert("Registration successfully");
        navigate("/login");
      } catch (err) {
        console.error("Error registering user", err);
      }
    }
  };

  return (
    <Container style={{ maxWidth: '500px' }}>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* Username */}
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Fullname */}
        <Form.Group controlId="formFullname" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={inputs.fullname}
            onChange={handleChange}
            isInvalid={!!errors.fullname}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullname}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Phone Number */}
        <Form.Group controlId="formPhoneNumber" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phonenumber"
            value={inputs.phonenumber}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Gender */}
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label> <br />
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={inputs.gender === 'male'}
            inline
          />
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={inputs.gender === 'female'}
            inline
          />
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group controlId="formCPassword" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            value={inputs.cpassword}
            onChange={handleChange}
            isInvalid={!!errors.cpassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.cpassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;











