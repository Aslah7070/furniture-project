// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import{FaUser, FaShoppingCart } from "react-icons/fa";


// function NavBar() {
//   return (
//     <>
//       <Navbar bg='dark'  className="custom-navbar">
//         <Container className="custom-container">
//           <Nav>
//             <Navbar.Brand  as={NavLink} to="/home" className="custom-brand">
//               FurnisH
//             </Navbar.Brand>
//           </Nav>
//           <Nav >
//             <NavLink to="/home" className="custom-link">Home</NavLink>
//             <NavLink to="/living" className="custom-link">LivingRoom</NavLink>
//             <NavLink to="/bedroom" className="custom-link">BedRoom</NavLink>
//             <NavLink to="/dining" className="custom-link">Dining</NavLink>
//             <NavLink to="/decor" className="custom-link">Decor</NavLink>
//           </Nav>

//           <Nav >
//           <NavLink to="/login" className="custom-link"><FaShoppingCart/></NavLink>
//           <NavLink to="/login" className="custom-link"><FaUser/></NavLink>

//           </Nav>

             
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;


// import React, { useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import UserCart from '../customHooks/CustomCart';
// import { useState } from 'react';



// function NavBar() {
//         const {cart}= UserCart()
//        const[cartCount,setCartCount]= useState(0)
 
    
//   //   console.log("caaart",cart);
//   //  let a=JSON.parse(localStorage.getItem("cartData"))
//   //  console.log("aaaaaaaaa",a);
    
// useEffect(()=>{
//  console.log("hello");
 
//   setCartCount(cart.reduce((acc,item)=>acc+item.qty,0))
// })

    
//     console.log(cartCount);
    
    
//   return (
//     <>
//       <Navbar bg='dark' className="custom-navbar">
//         <Container className="custom-container">
//           <Nav>
//             <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
//               FurnisH
//             </Navbar.Brand>
//           </Nav>
//           <Nav>
//             <NavLink to="/home" className="custom-link">Home</NavLink>
//             <NavLink to="/living" className="custom-link">LivingRoom</NavLink>
//             <NavLink to="/bedroom" className="custom-link">BedRoom</NavLink>
//             <NavLink to="/dining" className="custom-link">Dining</NavLink>
//             <NavLink to="/decor" className="custom-link">Decor</NavLink>
//           </Nav>

//           <Nav>
//             <NavLink to="/cart" className="custom-link"><FaShoppingCart />
//              Cart
//              {cartCount>0&&(
//               <span className="cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//               {cartCount}
//             </span>
//              )}
//              </NavLink>
//             <NavLink to="/userchecking" className="custom-link"><FaUser /> Profile</NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import UserCart from '../customHooks/CustomCart';

// function NavBar() {
//   const { cart } = UserCart();

//   return (
//     <>
//       <Navbar bg='dark' className="custom-navbar">
//         <Container className="custom-container">
//           <Nav>
//             <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
//               FurnisH
//             </Navbar.Brand>
//           </Nav>
//           <Nav>
//             <NavLink to="/home" className="custom-link">Home</NavLink>
//             <NavLink to="/living" className="custom-link">LivingRoom</NavLink>
//             <NavLink to="/bedroom" className="custom-link">BedRoom</NavLink>
//             <NavLink to="/dining" className="custom-link">Dining</NavLink>
//             <NavLink to="/decor" className="custom-link">Decor</NavLink>
//           </Nav>
//           <Nav>
//             <NavLink to="/cart" className="custom-link"><FaShoppingCart />
//              Cart
//              {cart > 0 && (
//               <span className="cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                 {cart}
//               </span>
//              )}
//              </NavLink>
//             <NavLink to="/userchecking" className="custom-link"><FaUser /> Profile</NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;



// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import UserCart from '../customHooks/CustomCart';

// function NavBar() {
//   const { cart } = UserCart();

//   return (
//     <Navbar bg='dark' className="custom-navbar">
//       {/* <Container> */}
//         <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
//           FurnisH
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavLink to="/home" className="custom-link">Home</NavLink>
//             <NavLink to="/living" className="custom-link">LivingRoom</NavLink>
//             <NavLink to="/bedroom" className="custom-link">BedRoom</NavLink>
//             <NavLink to="/dining" className="custom-link">Dining</NavLink>
//             <NavLink to="/decor" className="custom-link">Decor</NavLink>
//           </Nav>
//           <Nav>
//             <NavLink to="/cart" className="custom-link position-relative">
//               <FaShoppingCart /> Cart
//               {cart > 0 && (
//                 <span className="cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {cart}
//                 </span>
//               )}
//             </NavLink>
//             <NavLink to="/userchecking" className="custom-link"><FaUser /> Profile</NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       {/* </Container> */}
//     </Navbar>
//   );
// }

// export default NavBar;
//   import React, { useContext } from 'react';
//   import Nav from 'react-bootstrap/Nav';
//   import Navbar from 'react-bootstrap/Navbar';
//   import { NavLink } from 'react-router-dom';
//   import './NavBar.css'; 
//   import { Badge } from 'react-bootstrap'; 
//   import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';

//   function NavBar() { 
//        const {activeUser}=useContext(LoginContext)
//       console.log("onee", activeUser.username);
      

//     return (
//       <Navbar bg='dar' expand="lg" className="custom-navbar">
       
//           <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
//             FurnisH
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav"  />
//           <Navbar.Collapse id="basic-navbar-nav" className='dropdown'>
//             <Nav className="me-auto">
//               <Nav.Link as={NavLink} to="/home" className="custom-link">Home</Nav.Link>
//               <Nav.Link as={NavLink} to="/living" className="custom-link">Living Room</Nav.Link>
//               <Nav.Link as={NavLink} to="/bedroom" className="custom-link">Bed Room</Nav.Link>
//               <Nav.Link as={NavLink} to="/dining" className="custom-link">Dining</Nav.Link>
//               <Nav.Link as={NavLink} to="/decor" className="custom-link">Decor</Nav.Link>
//             </Nav>
//             <Nav>
//               <Nav.Link as={NavLink} to="/cart" className="custom-link position-relative">
//                  <FaShoppingCart/>
                
//                   <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    
//                   </Badge>
                
//               </Nav.Link>
//               <Nav.Link as={NavLink} to="/userchecking" className="custom-link">
//                 <FaUser/><br />
//                 {activeUser.username}
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
       
//       </Navbar>
//     );
//   }

//   export default NavBar;

// import React, { useContext } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css'; 
// import { Badge } from 'react-bootstrap'; 
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';

// function NavBar() { 
//   const {activeUser} = useContext(LoginContext);

//   return (
//     <Navbar bg="dark" expand="lg" className="custom-navbar">
//       <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
//         FurnisH
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <Nav.Link as={NavLink} to="/home" className="custom-link">Home</Nav.Link>
//           <Nav.Link as={NavLink} to="/living" className="custom-link">Living Room</Nav.Link>
//           <Nav.Link as={NavLink} to="/bedroom" className="custom-link">Bed Room</Nav.Link>
//           <Nav.Link as={NavLink} to="/dining" className="custom-link">Dining</Nav.Link>
//           <Nav.Link as={NavLink} to="/decor" className="custom-link">Decor</Nav.Link>
//         </Nav>
//         <Nav className="d-flex align-items-center">
//           {/* Cart Icon */}
//           <Nav.Link as={NavLink} to="/cart" className="custom-link position-relative">
//             <FaShoppingCart size={20} />
//             <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
//               {/* Cart count can go here */}
//             </Badge>
//           </Nav.Link>

//           {/* Profile Icon and Username */}
//           <Nav.Link as={NavLink} to="/userchecking" className="custom-link d-flex align-items-center">
//             <FaUser size={20} className="me-1" />
            
//           </Nav.Link>
//           <span className="username">{activeUser.username}</span>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 
import { Badge } from 'react-bootstrap'; 
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { LoginContext } from '../contextFolder/UserContext';
import { CartContext } from '../contextFolder/ProductContext';

function NavBar() { 
  const {activeUser} = useContext(LoginContext);
    const {cartItems}=useContext(CartContext)
    // console.log("cart",cartItems.length);
    let cartlength=cartItems.length;
    
      let user=activeUser?activeUser.username:"No user"
  return (
    <Navbar  expand="lg" className="custom-navbar ">
      <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
        FurnisH
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home" className="custom-link">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/living" className="custom-link">Living Room</Nav.Link>
          <Nav.Link as={NavLink} to="/bedroom" className="custom-link">Bed Room</Nav.Link>
          <Nav.Link as={NavLink} to="/dining" className="custom-link">Dining</Nav.Link>
          <Nav.Link as={NavLink} to="/decor" className="custom-link">Decor</Nav.Link>
        </Nav>
        <Nav className="d-flex align-items-center">
         
         {activeUser&&<Nav.Link as={NavLink} to="/cart" className="custom-link d-flex flex-column align-items-center position-relative">
            <FaShoppingCart size={20} />
            <span className="username">Cart</span>
            <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
              {cartlength>0?cartlength:0}
            </Badge>
          </Nav.Link>}

          
          <Nav.Link as={NavLink} to="/login" className="custom-link d-flex flex-column align-items-center">
            <FaUser size={20} className="me-1" />
            <span className="username">{user}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;




