import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../contextFolder/UserContext'

const Dining = () => {

   const {ProductDatas}= useContext(LoginContext)
   const [dining,setDining]=useState([])
 useEffect(()=>{
    setDining(ProductDatas&&ProductDatas.filter((datas)=>datas.type==="Dining Room Furniture"))
 },[ProductDatas])

 return (
    <div className="container" style={{marginTop:"100px"}}>
        <h1 className="mb-4">Dining Collections</h1>

        <div className="row">
            {dining && dining.map((datas) => (
                <Link className="col-md-2 mb-4 text-decoration-none" key={datas.id} to={`/ProductDetails/${datas.id}`}>
                    <div className="card">
                        <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{datas.imageCategory}</h5>
                            <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}.00</p>
                            <p className="card-text">₹{datas.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);
}

export default Dining
