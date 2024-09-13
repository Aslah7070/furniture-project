// import React, { useContext, useEffect, useState } from 'react'

// import { Link } from 'react-router-dom'
// import { MyContext } from '../../contextFolder/AllContext'
// import UseProductsDatas from '../../customHooks/CustomProductsDatas'



// const ShopeByCategories = () => {
//     // const {ProductsDatas}= useContext(MyContext)
//       const productDatas= UseProductsDatas()
    
//     const[categoryBedroom,setCategoryBedroom]= useState([])
//     const[categoryDining,setCategoryDining]= useState([])
//     const[categoryDecor,setCategoryDecor]= useState([])
//     const[categoryLiving,setCategoryLiving]= useState([])
// console.log("shop",productDatas);

// // console.log(category);

// useEffect(()=>{
//     setCategoryBedroom(productDatas&&productDatas.filter((items)=>items.category==="bedroom"))
//     setCategoryDining(productDatas&&productDatas.filter((items)=>items.category==="dining"))
//     setCategoryDecor(productDatas&&productDatas.filter((items)=>items.category==="dining"))   
//     setCategoryLiving(productDatas&&productDatas.filter((items)=>items.category==="livingroom"))
// },[productDatas])


//   return (
//     <div className="container mt-5">
//     <h1 className="mb-4">Shop by category</h1>
    
    
//         {categoryBedroom && categoryBedroom.map((datas) => (
//             <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>

//                 <div className="card">
//                     <h1>Room Items</h1>
//                     <img src={datas.image} alt={datas.name} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className='card-title'>{datas.name}</h5>
//               <p className="card-text fw-bold text-danger text-decoration-line-through">$ {datas.old_price}.00</p>
//               <h4 className="card-text fw-bold text-success">$ {datas.new_price}.00</h4>
//                     </div>
//                 </div>
//             </Link>
            
//         )).slice(-1)
//         }
 


    
//         {categoryDining && categoryDining.map((datas) => (
//             <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>

//                 <div className="card">
//                     <h1>Dining Items</h1>
//                     <img src={datas.image} alt={datas.name} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className='card-title'>{datas.name}</h5>
//               <p className="card-text fw-bold text-danger text-decoration-line-through">$ {datas.old_price}.00</p>
//               <h4 className="card-text fw-bold text-success">$ {datas.new_price}.00</h4>
//                     </div>
//                 </div>
//             </Link>
            
//         )).slice(-1)
//         }
    
    

   
//         {categoryDecor && categoryDecor.map((datas) => (
//             <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>

//                 <div className="card">
//                     <h1>Dining Items</h1>
//                     <img src={datas.image} alt={datas.name} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className='card-title'>{datas.name}</h5>
//               <p className="card-text fw-bold text-danger text-decoration-line-through">$ {datas.old_price}.00</p>
//               <h4 className="card-text fw-bold text-success">$ {datas.new_price}.00</h4>
//                     </div>
//                 </div>
//             </Link>
            
//         )).slice(-1)
//         }
  



    
//         {categoryDecor && categoryDecor.map((datas) => (
//             <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>

//                 <div className="card">
//                     <h1>Decoretion Items</h1>
//                     <img src={datas.image} alt={datas.name} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className='card-title'>{datas.name}</h5>
//               <p className="card-text fw-bold text-danger text-decoration-line-through">$ {datas.old_price}.00</p>
//               <h4 className="card-text fw-bold text-success">$ {datas.new_price}.00</h4>
//                     </div>
//                 </div>
//             </Link>
            
//         )).slice(-1)
//         }
    



   
//         {categoryLiving && categoryLiving.map((datas) => (
//             <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>

//                 <div className="card">
//                     <h1>Living Room Items</h1>
//                     <img src={datas.image} alt={datas.name} className="card-img-top" />
//                     <div className="card-body">
//                     <h5 className='card-title'>{datas.name}</h5>
//               <p className="card-text fw-bold text-danger text-decoration-line-through">$ {datas.old_price}.00</p>
//               <h4 className="card-text fw-bold text-success">$ {datas.new_price}.00</h4>
//                     </div>
//                 </div>
//             </Link>
            
//         )).slice(-1)
//         }
//     </div>

//   )
// }

// export default ShopeByCategories






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import UseProductsDatas from '../../customHooks/CustomProductsDatas';
// import "../HomeStyleFiles/shopByCategory.css"

// const ShopeByCategories = () => {
//     const productDatas = UseProductsDatas();
    
//     const [categoryBedroom, setCategoryBedroom] = useState([]);
//     const [categoryDining, setCategoryDining] = useState([]);
//     const [categoryDecor, setCategoryDecor] = useState([]);
//     const [categoryLiving, setCategoryLiving] = useState([]);

//     useEffect(() => {
//         setCategoryBedroom(productDatas.filter((items) => items.category === "bedroom"));
//         setCategoryDining(productDatas.filter((items) => items.category === "dining"));
//         setCategoryDecor(productDatas.filter((items) => items.category === "decor"));
//         setCategoryLiving(productDatas.filter((items) => items.category === "livingroom"));
//     }, [productDatas]);

//     const renderCategory = (category, title) => (
        
//         category.slice(-1).map((datas) => (
           
            
//             <div className="col-md-6 mb-4" key={datas.id}>
//                 <Link to={`/productDetails/${datas.id}`} className="text-decoration-none">
//                     <div className="card " id='categoryBackground'>
//                         <h1>{title}</h1>
                        
                        
//                     </div>
//                 </Link>
//             </div>
//         ))
//     );

//     return (
//         <div className="container mt-5">
//             <h1 className="mb-4">Shop by category</h1>
//             <div className="row">
//                 {renderCategory(categoryBedroom, "Bedroom Items")}
//                 {renderCategory(categoryDining, "Dining Items")}
//                 {renderCategory(categoryDecor, "Decoration Items")}
//                 {renderCategory(categoryLiving, "Living Room Items")}
//             </div>
//         </div>
//     );
// };

// export default ShopeByCategories;






// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import "../HomeStyleFiles/shopByCategory.css"

// function ShopeByCategories() {
//   return (
//     <div className='category-container'> 
//       <div className='Bedroom-Img'>
//         <NavLink to="/bedroom" className='toy-link'>Bedroom Items</NavLink>
//       </div>
//       <div className='Dining-Img'>
//         <NavLink to="/dining" className='clothes-link'>Dining Items</NavLink>
//       </div>
//       <div className='Decoration-Img'>
//         <NavLink to="/decor" className='nutrition-link'>Decoration Items</NavLink>
//       </div>
//       <div className='Living-Img'>
//         <NavLink to="/living" className='nutrition-link'>Living Room Items</NavLink>
//       </div>
//     </div>
//   );
// }

// export default ShopeByCategories;


import React from 'react';
import { NavLink } from 'react-router-dom';
import "../HomeStyleFiles/shopByCategory.css";
import { Container, Row, Col } from 'react-bootstrap';

function ShopeByCategories() {
  return (
    <Container className="category-container">
        <h1>Shop By Category</h1>
      <Row>
        <Col md={6} className='mb-4'>
        <NavLink to="/bedroom" className='text-decoration-none'>
          <div className='category-item Bedroom-Img'>
            
              <h1>Bedroom Items</h1>
            
          </div>
          </NavLink>
        </Col>
        <Col md={6} className='mb-4'>
        <NavLink to="/dining" className='text-decoration-none'>
          <div className='category-item Dining-Img'>
           
              <h1>Dining Items</h1>
          
          </div>
          </NavLink>
        </Col>
        <Col md={6} className='mb-4'>
        <NavLink to="/decor" className='text-decoration-none'>
          <div className='category-item Decoration-Img'>
            
              <h1>Decoration Items</h1>
           
          </div>
          </NavLink>
        </Col>
        <Col md={6} className='mb-4'>
        <NavLink to="/living" className='text-decoration-none'>
        
          <div className='category-item Living-Img'>
            
          <h1>Living Room Items</h1>
            
          </div>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default ShopeByCategories;
