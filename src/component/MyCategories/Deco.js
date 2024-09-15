import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';

const Deco = () => {
  const {ProductDatas}= useContext(LoginContext);
 const [decor,setDecor]= useState([]);
 console.log("on decor",ProductDatas);
 

 useEffect(()=>{
         setDecor(ProductDatas&&ProductDatas.filter((datas)=>datas.type==="Decoretion Furniture"))
 },[ProductDatas])

 return (
    <div className="container "style={{marginTop:"100px"}}>
        <h1 className="mb-4">Decoration Collections</h1>
 
        <div className="row">
            {decor && decor.map((datas) => (
                <Link className="col-md-2 mb-4 text-decoration-none" key={datas.id} to={`/ProductDetails/${datas.id}`}>
                    <div className="card">
                        <img src={datas.image} alt={datas.imageCategory} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{datas.imageCategory}</h5>
                            <p className="card-text fw-bold text-danger text-decoration-line-through">₹ {datas.price}</p>
                            <p className="card-text">₹{datas.offerPrice}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);
}

export default Deco
