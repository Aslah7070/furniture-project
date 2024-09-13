import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';

const Deco = () => {
  const {ProductDatas}= useContext(LoginContext);
 const [decor,setDecor]= useState([]);
 console.log("on decor",ProductDatas);
 

 useEffect(()=>{
         setDecor(ProductDatas&&ProductDatas.filter((datas)=>datas.category==="decor"))
 },[ProductDatas])

 return (
    <div className="container mt-5">
        <h1 className="mb-4">My Decor Room</h1>
 
        <div className="row">
            {decor && decor.map((datas) => (
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

export default Deco
