import React, { useContext } from 'react'

import { Link } from 'react-router-dom';
import { LoginContext } from '../../contextFolder/UserContext';


const Furniture = () => {
    // const { ProductDatas } = useContext(MyContext);
    const { ProductDatas }=useContext(LoginContext)
    // console.log("from home ds", ProductDatas);
  
    return (
      <div className='bg-white p-4'>
        <div className='containerImage'>
         
        </div>
                 
        <div className='row mt-4'>
          <h1>Furniture</h1>
          {
    
          ProductDatas && ProductDatas.map((data) => (
            <Link key={data.id} className='col-md-4 mb-4 text-decoration-none' to={`/productDetails/${data.id}`}>
              <div className='card h-100'>
                <img src={data.image} className='card-img-top' alt={data.name} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.name}</h5>
                  <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {data.old_price}.00</p>
                  <h4 className="card-text fw-bold text-success">₹{data.new_price}.00</h4>
                
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
