

// // import React, { useContext } from 'react';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import { NavLink } from 'react-router-dom';
// // import './NavBar.css'; 
// // import { Badge } from 'react-bootstrap'; 
// // import { FaUser, FaShoppingCart } from "react-icons/fa";
// // import { LoginContext } from '../contextFolder/UserContext';
// // import { CartContext } from '../contextFolder/ProductContext';

// // function NavBar() { 
// //   const {activeUser} = useContext(LoginContext);
// //     const {cartItems}=useContext(CartContext)
// //     // console.log("cart",cartItems.length);
// //     let cartlength=cartItems.length;
    
// //       let user=activeUser&&activeUser.username
// //   return (
// //     <Navbar  expand="lg" className="custom-navbar ">
// //       <Navbar.Brand as={NavLink} to="/home" className="custom-brand">
// //       FurniLux
// //       </Navbar.Brand>
// //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //       <Navbar.Collapse id="basic-navbar-nav">
// //         <Nav className="me-auto">
// //           <Nav.Link as={NavLink} to="/home" className="custom-link">Home</Nav.Link>
// //           <Nav.Link as={NavLink} to="/living" className="custom-link">Living Room</Nav.Link>
// //           <Nav.Link as={NavLink} to="/bedroom" className="custom-link">Bed Room</Nav.Link>
// //           <Nav.Link as={NavLink} to="/dining" className="custom-link">Dining</Nav.Link>
// //           <Nav.Link as={NavLink} to="/decor" className="custom-link">Decor</Nav.Link>
// //         </Nav>
// //         <Nav className="d-flex align-items-center">
         
// //          {activeUser&&<Nav.Link as={NavLink} to="/cart" className="custom-link d-flex flex-column align-items-center position-relative">
// //             <FaShoppingCart size={20} />
// //             <span className="username">Cart</span>
// //             <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
// //               {cartlength>0?cartlength:0}
// //             </Badge>
// //           </Nav.Link>}

          
// //           <Nav.Link as={NavLink} to="/login" className="custom-link d-flex flex-column align-items-center">
// //             <FaUser size={20} className="me-1" />
// //             <span className="username">{user}</span>
// //           </Nav.Link>
// //         </Nav>
// //       </Navbar.Collapse>
// //     </Navbar>
// //   );
// // }

// // export default NavBar;



// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-teal-600 h-20 flex items-center px-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <NavLink to="/home" className="text-white text-3xl font-bold hover:text-black">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/home" className="text-white text-lg hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg hover:text-black">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? user : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;




// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-black h-20 flex items-center px-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <NavLink to="/home" className="text-white text-3xl font-bold hover:text-gray-300">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/home" className="text-white text-lg hover:text-gray-300">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg hover:text-gray-300">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg hover:text-gray-300">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg hover:text-gray-300">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg hover:text-gray-300">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white hover:text-gray-300">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white hover:text-gray-300">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? user : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;




// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-[#05a7b5] h-[90px] flex items-center px-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <NavLink to="/home" className="text-white text-[2.6rem] font-bold hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/home" className="text-black text-lg no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-black text-lg hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-black text-lg hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-black text-lg hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-black text-lg hover:text-black">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-[#05a7b5] h-[90px] flex items-center px-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <NavLink to="/home" className="text-white text-[2.6rem] font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/home" className="text-black text-lg  no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-black text-lg no-underline hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-black text-lg no-underline hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-black text-lg no-underline hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-black text-lg no-underline hover:text-black">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         <NavLink to="/home" className="text-white text-[2.6rem] font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex space-x-6">
//           <NavLink to="/home" className="text-white text-lg no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg no-underline hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg no-underline hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg no-underline hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg no-underline hover:text-black">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm space-x-16">
//       <div className="container mx-auto flex justify-between items-center ">
//         <NavLink to="/home" className="text-rgb(166, 196, 160) text-[2.6rem] font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         <div className="hidden lg:flex flex-grow justify-center space-x-16 ">
//           <NavLink to="/home" className="text-white text-lg no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg no-underline hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg no-underline hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg no-underline hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg no-underline hover:text-black">Decor</NavLink>
//         </div>

//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}

//           <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;







// import React, { useContext, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   // Toggle Mobile Menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/home" className="text-green-400 text-3xl font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-grow justify-center space-x-16">
//           <NavLink to="/home" className="text-white text-lg no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg no-underline hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg no-underline hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg no-underline hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg no-underline hover:text-black">Decor</NavLink>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button 
//           onClick={toggleMobileMenu} 
//           className="lg:hidden text-white hover:text-black focus:outline-none"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}
          
//           <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
//           <div className="flex flex-col items-center space-y-4 py-6">
//             <NavLink onClick={toggleMobileMenu} to="/home" className="text-gray-800 text-lg no-underline hover:text-black">Home</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/living" className="text-gray-800 text-lg no-underline hover:text-black">Living Room</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/bedroom" className="text-gray-800 text-lg no-underline hover:text-black">Bed Room</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/dining" className="text-gray-800 text-lg no-underline hover:text-black">Dining</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/decor" className="text-gray-800 text-lg no-underline hover:text-black">Decor</NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;


// import React, { useContext, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   // Toggle Mobile Menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Handle Search
//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search functionality here, e.g., redirect to search results page
//     console.log("Search query:", searchQuery);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/home" className="text-green-400 text-3xl font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

       

//         {/* Desktop Menu */}
//         {/* <div className="hidden lg:flex flex-grow justify-center space-x-16">
//           <NavLink to="/home" className="text-white text-lg no-underline hover:text-black">Home</NavLink>
//           <NavLink to="/living" className="text-white text-lg no-underline hover:text-black">Living Room</NavLink>
//           <NavLink to="/bedroom" className="text-white text-lg no-underline hover:text-black">Bed Room</NavLink>
//           <NavLink to="/dining" className="text-white text-lg no-underline hover:text-black">Dining</NavLink>
//           <NavLink to="/decor" className="text-white text-lg no-underline hover:text-black">Decor</NavLink>
//         </div> */}

// <div className="hidden lg:flex flex-grow justify-center space-x-16">
  
//   <NavLink 
//     to="/home" 
//     className="text-slate-50 text-xl font-bold no-underline hover:text-green-400 flex items-center"
//   >
//     Home
//   </NavLink>
//   <NavLink 
//     to="/living" 
//     className="text-slate-50 text-xl font-bold no-underline hover:text-green-400 flex items-center"
//   >
//     Living Room
//   </NavLink>
//   <NavLink 
//     to="/bedroom" 
//     className="text-slate-50 text-xl font-bold no-underline hover:text-green-400 flex items-center"
//   >
//     Bed Room
//   </NavLink>
//   <NavLink 
//     to="/dining" 
//     className="text-slate-50 text-xl font-bold no-underline hover:text-green-400 flex items-center"
//   >
//     Dining
//   </NavLink>
//   <NavLink 
//     to="/decor" 
//     className="text-slate-50 text-xl font-bold no-underline hover:text-green-400 flex items-center"
//   >
//     Decor
//   </NavLink>
// </div>


//          {/* Search Bar (visible on large screens) */}
//          <form 
//           onSubmit={handleSearch} 
//           className=" me-5 hidden lg:flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
//         >
//           <input
//             type="text"
//             placeholder="Search for products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 w-64 focus:outline-none text-gray-800"
//           />
//           <button type="submit" className="px-3 py-2 bg-green-400 text-white hover:bg-green-500">
//             <FaSearch />
//           </button>
//         </form>

//         {/* Mobile Menu Toggle */}
//         <button 
//           onClick={toggleMobileMenu} 
//           className="lg:hidden text-white hover:text-black focus:outline-none"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-4">
//           {activeUser && (
//             <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className="text-xs">Cart</span>
//               <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}
          
//           <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className="text-xs font-semibold">{user ? <span className="text-black font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
//           <div className="flex flex-col items-center space-y-4 py-6">
//             <NavLink onClick={toggleMobileMenu} to="/home" className="text-gray-800 text-lg no-underline hover:text-black">Home</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/living" className="text-gray-800 text-lg no-underline hover:text-black">Living Room</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/bedroom" className="text-gray-800 text-lg no-underline hover:text-black">Bed Room</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/dining" className="text-gray-800 text-lg no-underline hover:text-black">Dining</NavLink>
//             <NavLink onClick={toggleMobileMenu} to="/decor" className="text-gray-800 text-lg no-underline hover:text-black">Decor</NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;






// import React, { useContext, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Badge } from 'react-bootstrap';
// import { FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch ,FaHeart} from "react-icons/fa";
// import { LoginContext } from '../contextFolder/UserContext';
// import { CartContext } from '../contextFolder/ProductContext';

// function NavBar() {
//   const { activeUser } = useContext(LoginContext);
//   const { cartItems } = useContext(CartContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   let cartlength = cartItems.length;
//   let user = activeUser && activeUser.username;

//   // Toggle Mobile Menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Handle Search
//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Search query:", searchQuery);
//   };

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <NavLink to="/home" className="text-green-400 text-3xl font-bold no-underline hover:text-black flex items-center">
//           FurniLux
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex flex-grow justify-center space-x-16">
//           {['home', 'living', 'bedroom', 'dining', 'decor'].map((path) => (
//             <NavLink
//               key={path}
//               to={`/${path}`}
//               className={({ isActive }) =>
//                 `text-xl font-bold no-underline flex items-center ${
//                   isActive ? 'text-black' : 'text-slate-50 hover:text-green-400'
//                 }`
//               }
//             >
//               {path.charAt(0).toUpperCase() + path.slice(1).replace('home', 'Home').replace('bedroom', 'Bed Room').replace('living', 'Living Room').replace('dining', 'Dining').replace('decor', 'Decor')}
//             </NavLink>
//           ))}
//         </div>

//         {/* Search Bar (visible on large screens) */}
//         <form 
//           onSubmit={handleSearch} 
//           className="me-5 hidden lg:flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
//         >
//           <input
//             type="text"
//             placeholder="Search for products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 w-64 focus:outline-none text-gray-800"
//           />
//           <button type="submit" className="px-3 py-2 bg-green-400 text-white hover:bg-green-500">
//             <FaSearch />
//           </button>
//         </form>

//         {/* Mobile Menu Toggle */}
//         <button 
//           onClick={toggleMobileMenu} 
//           className="lg:hidden text-white hover:text-black focus:outline-none"
//         >
//           {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-4">
//         {activeUser && (
//     <NavLink to="/wishlist" className="relative flex flex-col items-center text-white no-underline hover:text-black">
//       <FaHeart size={20} />
//       <span className="ms-2 text-2xs">Wishlist</span>
//       <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//         {/* Replace 0 with the length of wishlist items when available */}
//         {wishlistItems?.length > 0 ? wishlistItems.length : 0}
//       </Badge>
//     </NavLink>
//   )}
//           {activeUser && (
//             <NavLink to="/cart" className=" relative flex flex-col items-center text-white no-underline hover:text-black">
//               <FaShoppingCart size={20} />
//               <span className=" ms-2 text-2xs">Cart</span>
//               <Badge pill className=" bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
//                 {cartlength > 0 ? cartlength : 0}
//               </Badge>
//             </NavLink>
//           )}
          
//           <NavLink to="/login" className=" flex flex-col items-center text-white no-underline hover:text-black">
//             <FaUser size={20} />
//             <span className=" ms-2  text-2xs font-semibold">{user ? <span className="text-white font-bold">{user}</span> : "Login"}</span>
//           </NavLink>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
//           <div className="flex flex-col items-center space-y-4 py-6">
//             {['home', 'living', 'bedroom', 'dining', 'decor'].map((path) => (
//               <NavLink
//                 key={path}
//                 to={`/${path}`}
//                 onClick={toggleMobileMenu}
//                 className={({ isActive }) =>
//                   `text-gray-800 text-lg no-underline ${
//                     isActive ? 'font-bold text-green-400' : 'hover:text-black'
//                   }`
//                 }
//               >
//                 {path.charAt(0).toUpperCase() + path.slice(1).replace('home', 'Home').replace('bedroom', 'Bed Room').replace('living', 'Living Room').replace('dining', 'Dining').replace('decor', 'Decor')}
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;




import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaBars, FaTimes, FaSearch, FaHeart } from "react-icons/fa";
import { LoginContext } from '../contextFolder/UserContext';
import { CartContext } from '../contextFolder/ProductContext';
import Cookies from 'js-cookie';

function NavBar() {
  const { activeUser } = useContext(LoginContext);
  const { cartItems, wishlistItems } = useContext(CartContext); // Add wishlistItems here if it's part of CartContext
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  let cartlength = cartItems.length;
  let wishlistCount = wishlistItems?.length || 0; // Ensure wishlistItems exists
  let user = activeUser && activeUser.username;

console.log("active",user);


  // let activeuser= Cookies.get("user")
  //      let token= Cookies.get("userToken")

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  
  
  
 


  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent h-[90px] flex items-center px-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/home" className="text-green-400 text-3xl font-bold no-underline hover:text-black flex items-center">
          FurniLux
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-grow justify-center space-x-16">
          {['home', 'living', 'bedroom', 'dining', 'decor'].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className={({ isActive }) =>
                `text-xl font-bold no-underline flex items-center ${
                  isActive ? 'text-black' : 'text-slate-50 hover:text-green-400'
                }`
              }
            >
              {path.charAt(0).toUpperCase() + path.slice(1).replace('home', 'Home').replace('bedroom', 'Bed Room').replace('living', 'Living Room').replace('dining', 'Dining').replace('decor', 'Decor')}
            </NavLink>
          ))}
        </div>

        {/* Search Bar (visible on large screens) */}
        <form 
          onSubmit={handleSearch} 
          className="me-5 hidden lg:flex items-center border border-gray-300 rounded-full overflow-hidden bg-white"
        >
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-64 focus:outline-none text-gray-800"
          />
          <button type="submit" className="px-3 py-2 bg-green-400 text-white hover:bg-green-500">
            <FaSearch />
          </button>
        </form>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-white hover:text-black focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {activeUser && (
            <NavLink to="/wishlist" className="relative flex flex-col items-center text-white no-underline hover:text-black">
              <FaHeart size={20} />
              <span className="ms-2 text-2xs">Wishlist</span>
              <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
                {wishlistCount > 0 ? wishlistCount : 0}
              </Badge>
            </NavLink>
          )}
          {activeUser && (
            <NavLink to="/cart" className="relative flex flex-col items-center text-white no-underline hover:text-black">
              <FaShoppingCart size={20} />
              <span className="ms-2 text-2xs">Cart</span>
              <Badge pill className="bg-red-600 text-white absolute -top-1 -right-2 text-[0.75rem]">
                {cartlength > 0 ? cartlength : 0}
              </Badge>
            </NavLink>
          )}
          
          <NavLink to="/login" className="flex flex-col items-center text-white no-underline hover:text-black">
            <FaUser size={20} />
            <span className="ms-2 text-2xs font-semibold">{user ? (<span className="text-white font-bold">{user}</span>) : ("Login")}</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col items-center space-y-4 py-6">
            {['home', 'living', 'bedroom', 'dining', 'decor'].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                onClick={toggleMobileMenu}
                className={({ isActive }) =>
                  `text-gray-800 text-lg no-underline ${
                    isActive ? 'font-bold text-green-400' : 'hover:text-black'
                  }`
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1).replace('home', 'Home').replace('bedroom', 'Bed Room').replace('living', 'Living Room').replace('dining', 'Dining').replace('decor', 'Decor')}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;


