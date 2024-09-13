import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { LoginContext } from '../contextFolder/UserContext'

const Bedroom = () => {

   const[bedroom,setBedroom]= useState([])
          const {ProductDatas}= useContext(LoginContext)
        //   console.log(" bedroom" ,ProductDatas);
          

          useEffect(()=>{
            setBedroom(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="bedroom"))
          },[ProductDatas])
          return (
            <div className="container mt-5">
                <h1 className="mb-4">My Bedroom Room</h1>
    
                <div className="row">
                    {bedroom && bedroom.map((datas) => (
                        <Link className="col-md-4 mb-4 text-decoration-none" key={datas.id} to={`/productDetails/${datas.id}`}>
                            <div className="card">
                                <img src={datas.image} alt={datas.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{datas.name}</h5>
                                    <p className="card-text">{datas.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
}

export default Bedroom
