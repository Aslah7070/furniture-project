


import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoginContext } from '../contextFolder/UserContext';
import styles from './style/ProductsListD.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import axios from 'axios';

const ProductsListD = () => {
   const navigate= useNavigate()
  const [products, setProducts] = useState([]);
  const { ProductDatas,deleteProduct } = useContext(LoginContext);
  console.log("on pro",ProductDatas);
  

  
  const { id } = useParams();
  // console.log("hello",id);
  

  const findProduct = products.filter((item) => item.id === id);
  console.log(  "findproduct",findProduct);
useEffect(()=>{
      try {
        const fetchproduct= async ()=>{
          let response=  await axios.get(`http://localhost:4000/Products`)
          setProducts(response.data)
        } 
        fetchproduct()
      } catch (error) {
        console.log("Error from fetching products",error );
      } 
},[ProductDatas])

  return (
    <div className={`container ${styles.productContainer}`}>
      {findProduct && findProduct.map((data) => (
        <div key={data.id} className={`card mb-3 ${styles.productCard}`}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={data.image} alt={data.name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Category: {data.category}</p>
                <p className="card-text text-danger">New Price: {data.new_price}</p>
                <p className="card-text text-muted">Old Price: {data.old_price}</p>
                <p className="card-text">Top Trends: {data.topTrends?"Yse":"No"}</p>
                <p className="card-text">Top Trends: {data.newCollections?"Yes":"No"}</p>
                <p className="card-text "> {`"${data.detailOne}"`}</p>
                <p className="card-text "> {data.description}</p>

              </div>
            </div>
          </div>


          <div className="d-flex justify-content-end">
          <button onClick={()=>navigate("/products")} className="btn btn-primary me-2 mb-2">Back To List</button>
        <button onClick={()=>navigate(`/editingform/${data.id}`)} className="btn btn-warning me-2 mb-2">Edit</button>
        <button onClick={()=>deleteProduct(data.id)}  className="btn btn-danger me-2 mb-2">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsListD;
