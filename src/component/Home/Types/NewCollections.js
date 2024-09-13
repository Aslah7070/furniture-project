import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { LoginContext } from '../../contextFolder/UserContext'

const NewCollections = () => {

   const{ProductDatas}= useContext(LoginContext)   
//    console.log( "new cate",ProductDatas);
   
   const [newColl,setNewColl]=useState([])
  
   
   useEffect(()=>{
            setNewColl(ProductDatas&&ProductDatas.filter((datas)=>datas.newCollections===true))
   },[ProductDatas])
   return (
    <div className="container mt-5">
        <h1 className="mb-4">New Collections</h1>
        
        <div className="row">
            {newColl && newColl.map((datas) => (
                <Link className="col-md-4 mb-4 text-decoration-none" to={`/productDetails/${datas.id}`} key={datas.id}>
                    <div className="card">
                        <img src={datas.image} alt={datas.name} className="card-img-top" />
                        <div className="card-body">
                        <h5 className='card-title'>{datas.name}</h5>
                  <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.old_price}.00</p>
                  <h4 className="card-text fw-bold text-success">₹ {datas.new_price}.00</h4>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        
    </div>
);
}

export default NewCollections
