import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { LoginContext } from '../contextFolder/UserContext'

const Bedroom = () => {

   const[bedroom,setBedroom]= useState([])
          const {ProductDatas}= useContext(LoginContext)
        //   console.log(" bedroom" ,ProductDatas);
          

          useEffect(()=>{
            setBedroom(ProductDatas&&ProductDatas.filter((datas)=>datas.type==="Bedroom Furniture"))
          },[ProductDatas])
          return (
            <div className="container" style={{marginTop:"100px"}}>
                <h1 className="mb-4">Bedroom Room Collections</h1>
    
                <div className="row">
                    {bedroom && bedroom.map((datas) => (
                        <Link className="col-md-2 mb-4 text-decoration-none" key={datas.id} to={`/productDetails/${datas.id}`}>
                            <div className="card">
                                <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{datas.imageCategory}</h5>
                                    <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}.00</p>
                                    <p className="card-text ">₹{datas.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
}

export default Bedroom
