
//css start................
// .user-details-page {
//   max-width: 900px;
//   margin: auto;
// }

// .user-card {
//   border-radius: 10px;
// }

// .details-card {
//   border-radius: 10px;
//   margin-top: 20px;
// }

// .profile-image {
//   border-radius: 50%;
//   width: 150px;
//   height: 150px;
//   object-fit: cover;
//   margin: auto;
// }

//css end................












// import React, { useContext } from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import { LoginContext } from '../contextFolder/UserContext';
// import { useParams } from 'react-router-dom';
// // import './UserDetails.css'; // Optional for additional custom styles

// const ClientDetails = () => {
//  const{id}=useParams()
//    const {customerse}= useContext(LoginContext)
//   let User= customerse.filter((users)=>users.id===id)
//   console.log("on client details",User);
  

//   return (
//     <Container className="user-details-page mt-5">
//       <Row>
//         <Col md={4}>
//           <Card className="user-card d-flex align-items-center">
//             <Card.Img
//               variant="top"
//               src="https://www.finriseadvisors.com/public/img/uploads/testimonial/1720867870.jpg"
//               alt="User Profile"
//               className="profile-image w-75 h-75"
//             />
//             <Card.Body>
//               <Card.Title className="text-center">{}</Card.Title>
//               <Card.Subtitle className="text-center mb-2 text-muted">
//                 {}
//               </Card.Subtitle>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Card className="details-card">
//             <Card.Header className='bg-dark text-white '><strong>User Information</strong></Card.Header>
//             <ListGroup variant="flush">
//             <ListGroup.Item>
//                 <strong>Name:</strong> {User[0].fullname}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Email:</strong> {User[0].email}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Fullname:</strong> {User[0].fullname}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>PhoneNumber:</strong> {User[0].phonenumber}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Gender:</strong> {User[0].gender}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Address:</strong> {User[0].address}
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//         <Card>

//         </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ClientDetails;



// import React, { useContext } from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import { LoginContext } from '../contextFolder/UserContext';
// import { useParams } from 'react-router-dom';
// // import './UserDetails.css'; // Optional for additional custom styles

// const ClientDetails = () => {
//   const { id } = useParams();
//   const { customerse } = useContext(LoginContext);

//   const user = customerse.find((user) => user.id === id);
//   const cartItems = user ? user.cart : []; // Assuming cart items are stored in user.cart

//   return (
//     <Container className="user-details-page mt-5">
//       <Row>
//         <Col md={4}>
//           <Card className="user-card d-flex align-items-center">
//             <Card.Img
//               variant="top"
//               src="https://www.finriseadvisors.com/public/img/uploads/testimonial/1720867870.jpg"
//               alt="User Profile"
//               className="profile-image w-75 h-75"
//             />
//             <Card.Body>
//               <Card.Title className="text-center">{user?.fullname}</Card.Title>
//               <Card.Subtitle className="text-center mb-2 text-muted">
//                 {user?.email}
//               </Card.Subtitle>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Card className="details-card">
//             <Card.Header className='bg-dark text-white '><strong>User Information</strong></Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <strong>Name:</strong> {user?.fullname}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Email:</strong> {user?.email}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Phone Number:</strong> {user?.phonenumber}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Gender:</strong> {user?.gender}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <strong>Address:</strong> {user?.address}
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           <Card>
//             <Card.Header className='bg-dark text-white'><strong>Cart Items</strong></Card.Header>
//             <Card.Body>
//               {cartItems.length > 0 ? (
//                 <Row>
//                   {cartItems.map((item, index) => (
//                     <Col key={index} md={4} >
//                       <Card >
//                         <Card.Img
//                           variant="top"
//                           src={item.image} // Assuming image URL is stored in item.image
//                           alt={item.name}
//                           className="cart-item-image "
//                         />
//                         <Card.Body>
//                           <Card.Title>{item.name}</Card.Title> {/* Assuming item name is stored in item.name */}
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               ) : (
//                 <p>No items in cart</p>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ClientDetails;




// import React, { useContext, useEffect, useState } from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// import { LoginContext } from '../contextFolder/UserContext';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import "./style/clientDetails.css";

// const ClientDetails = () => {
//   const { id } = useParams();
//   const { customerse } = useContext(LoginContext);
//   const [customer, setCustomer] = useState(null);

//   useEffect(() => {
//     const user = customerse.find((user) => user.id === id);
//     if (user) setCustomer(user);
//   }, [customerse, id]);

//   const handleBlock = () => {
//     if (customer) {
//       const updatedBlocked = !customer.blocked;
//       setCustomer({ ...customer, blocked: updatedBlocked });
//       axios.patch(`http://localhost:4000/Users/${customer.id}`, { blocked: updatedBlocked });
//     }
//   };

//   if (!customer) return <p>Loading...</p>;

//   return (
//     <Container className="user-details-page mt-5">
//       <Row>
//         <Col md={4}>
//           <Card className="user-card d-flex align-items-center">
//             <Card.Img
//               variant="top"
//               src="https://www.finriseadvisors.com/public/img/uploads/testimonial/1720867870.jpg"
//               alt="User Profile"
//               className="profile-image w-75 h-75"
//             />
//             <Card.Body>
//               <Card.Title className="text-center">{customer.fullname}</Card.Title>
//               <Card.Subtitle className="text-center mb-2 text-muted">
//                 {customer.email}
//               </Card.Subtitle>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <Card>
//             <Card.Header className="bg-dark text-white"><strong>User Information</strong></Card.Header>
//             <ListGroup variant="flush">
//               <ListGroup.Item><strong>Name:</strong> {customer.fullname}</ListGroup.Item>
//               <ListGroup.Item><strong>Email:</strong> {customer.email}</ListGroup.Item>
//               <ListGroup.Item><strong>Phone Number:</strong> {customer.phonenumber}</ListGroup.Item>
//               <ListGroup.Item><strong>Gender:</strong> {customer.gender}</ListGroup.Item>
//               <ListGroup.Item><strong>Address:</strong> {customer.address}</ListGroup.Item>
//             </ListGroup>
//             <button
//               id="block-button"
//               style={{ backgroundColor: customer.blocked ? "red" : "blue" }}
//               onClick={handleBlock}
//             >
//               {customer.blocked ? "Blocked" : "Block User"}
//             </button>
//           </Card>
//         </Col>
//       </Row>

//       <Row className="cart-row mt-5">
//         <Col>
//           <Card>
//             <Card.Header className="bg-dark text-white"><strong>User Cart Items</strong></Card.Header>
//             <Card.Body>
//               {customer.cart && customer.cart.length > 0 ? (
//                 <Row>
//                   {customer.cart.map((item, index) => (
//                     <Col key={index} md={4} className="mb-3">
//                       <Card className="cart-item-card">
//                         <Card.Img variant="top" src={item.image} alt={item.name} className="cart-item-image" />
//                         <Card.Body><Card.Title>{item.name}</Card.Title></Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               ) : (
//                 <p>No items in cart</p>
//               )}
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ClientDetails;



import React, {  useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./style/clientDetails.css";

const ClientDetails = () => {
  const { id } = useParams();
  
  const [customer, setCustomer] = useState(null);

  // Function to fetch the user details from the server;
  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/Users/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.error('Error fetching customer data:', error);
    }
  };

  useEffect(() => {

    fetchCustomer();
  },[id]);

  const handleBlock = async () => {
    if (customer) {
      const updatedBlocked = !customer.blocked;

      try {
        await axios.patch(`http://localhost:4000/Users/${customer.id}`, { blocked: updatedBlocked });
        // Re-fetch the updated customer data
        fetchCustomer();
      } catch (error) {
        console.error('Error updating block status:', error);
      }
    }
  };

  if (!customer) return <p>Loading...</p>;

  return (
    <Container className="user-details-page mt-5">
      <Row>
        <Col md={4}>
          <Card className="user-card d-flex align-items-center">
            <Card.Img
              variant="top"
              src="https://www.finriseadvisors.com/public/img/uploads/testimonial/1720867870.jpg"
              alt="User Profile"
              className="profile-image w-75 h-75"
            />
            <Card.Body>
              <Card.Title className="text-center">{customer.fullname}</Card.Title>
              <Card.Subtitle className="text-center mb-2 text-muted">
                {customer.email}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header className="bg-dark text-white"><strong>User Information</strong></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Name:</strong> {customer.fullname}</ListGroup.Item>
              <ListGroup.Item><strong>Email:</strong> {customer.email}</ListGroup.Item>
              <ListGroup.Item><strong>Phone Number:</strong> {customer.phonenumber}</ListGroup.Item>
              <ListGroup.Item><strong>Gender:</strong> {customer.gender}</ListGroup.Item>
              <ListGroup.Item><strong>Address:</strong> {customer.address}</ListGroup.Item>
            </ListGroup>
            <button
              id="block-button"
              style={{ backgroundColor: customer.blocked ? "red" : "blue" }}
              onClick={handleBlock}
            >
              {customer.blocked ? "Blocked" : "Block User"}
            </button>
          </Card>
        </Col>
      </Row>

      <Row className="cart-row mt-5">
        <Col>
          <Card>
            <Card.Header className="bg-dark text-white"><strong>User Cart Items</strong></Card.Header>
            <Card.Body>
              {customer.cart && customer.cart.length > 0 ? (
                <Row>
                  {customer.cart.map((item, index) => (
                    <Col key={index} md={4} className="mb-3">
                      <Card className="cart-item-card">
                        <Card.Img variant="top" src={item.image} alt={item.name} className="cart-item-image" />
                        <Card.Body><Card.Title>{item.name}</Card.Title></Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <p>No items in cart</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientDetails;
