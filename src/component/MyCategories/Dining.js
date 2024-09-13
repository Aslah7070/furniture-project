import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../contextFolder/UserContext'

const Dining = () => {

   const {ProductDatas}= useContext(LoginContext)
   const [dining,setDining]=useState([])
 useEffect(()=>{
    setDining(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="dining"))
 },[ProductDatas])

 return (
    <div className="container mt-5">
        <h1 className="mb-4">My Dining Room</h1>

        <div className="row">
            {dining && dining.map((datas) => (
                <Link className="col-md-4 mb-4 text-decoration-none" key={datas.id} to={`/ProductDetails/${datas.id}`}>
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

export default Dining
