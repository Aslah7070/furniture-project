import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import { LoginContext } from '../../contextFolder/UserContext';


const Furniture = () => {
    // const { ProductDatas } = useContext(MyContext);
    const { ProductDatas }=useContext(LoginContext)
    console.log("from home ds");
  
    return (
      <div className='bg-white p-4' style={{marginTop:"80px"}}>
        <div className='containerImage'>
         
        </div>
                 
        <div className='row mt-4'>
          <h1>Furniture</h1>
          {
    
          ProductDatas && ProductDatas.map((data) => (
            <Link key={data.id} className='col-md-3 mb-4 text-decoration-none' to={`/productDetails/${data.id}`}>
              <div className='card h-100'>
                <img src={data.image} className='card-img-top' alt={data.imageCategory} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.imageCategory}</h5>
                  <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {data.price}.00</p>
                  <h4 className="card-text fw-bold text-success">₹{data.offerPrice}.00</h4>
                
                </div>
              </div>
            </Link>
          )).slice(0,9)
          }
        </div>
  
        
      </div>
    );
}

export default Furniture
