import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';



const Login = () => {

 
// let   {UserLogin}= useContext(MyContext)
  // let {handleSubmission,handleChange,datas}=UserLogin
       const{handleSubmission,handleChange,datas,activeUser,setActiveUser}= useContext(LoginContext)
       const userName = activeUser?.username;
       const email = activeUser?.email;
       const handlelogout=()=>{
        setActiveUser(null)
        
        localStorage.removeItem("activeUserData")
      }
 if(!activeUser){
  return (
    
    
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2>Sign In</h2>
      <Form onSubmit={handleSubmission}>
        <Form.Group controlId="formUsername" className="mb-3">

          <Form.Control type="text" placeholder="Enter your username" required onChange={handleChange}
          value={datas.username} name="username"
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">

          <Form.Control type="password" placeholder="Enter your password" 
          required onChange={handleChange} 
          value={datas.password}
          name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
         Log In
        </Button> 
      
        <p className='font-semibold'>you don't have an account? <Link className='text-blue-900 text-decoration-none' to={'/signup'}>Create an account</Link></p>
      </Form>
    </Container>
  );
 }else{
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card w-100" style={{ maxWidth: '500px' }}>
            <div className="card-body text-center">
                <FaUser className="w-50 h-50 mb-3" />
                <h2 className="card-title">{userName}</h2>
                <p className="card-text text-muted">An active user</p>
                <p className="card-text">Email Address: {email}</p>
                <button className="btn btn-danger me-2" onClick={handlelogout}>Log out</button>
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
);
 }
  
};

export default Login;