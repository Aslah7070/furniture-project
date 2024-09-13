

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/AddForm.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const AddForm = () => {
let initial={
    name:"",
    category:"",
    image:"",
    new_price:"",
    old_price:"",
    description:"",
    rating:"",
    topTrends:"",
    newCollections:"",
    detailOne:""
}

const [newProduct,setNewProduct]=useState(initial); 
 let navigate= useNavigate()



const handlesubmit=(e)=>{
e.preventDefault()
  async  function  ProductPosting(){
   try {
    let response=await axios.post(`http://localhost:4000/Products`,newProduct);
    alert("product added successfully")
    navigate("/products")
   
   } catch (error) {
    console.log( "fethching error :", error);
    
   }
  }
  ProductPosting()
}
const handleChange=(e)=>{
const {name,value}=e.target
setNewProduct({...newProduct,[name]:value})

}


  return (
    <div className="container mt-4">
      <h2>Form Title</h2>
      <form className='form  p-4 rounded' onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">Name</label>
          <input type="text" className="form-control" id="input1" value={newProduct.name} required name='name' placeholder="Enter Product Name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="input2" className="form-label">Category</label>
          <input type="text" className="form-control" id="input2" value={newProduct.category} required name='category' placeholder="Enter the category"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="input3" className="form-label">Image URL</label>
          <input type="text" className="form-control" id="input3" value={newProduct.image} required name='image' placeholder="Enter image URL"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="input4" className="form-label">MRP Rate</label>
          <input type="number" className="form-control" id="input4" value={newProduct.old_price} required name='old_price' placeholder="Enter MRP rate"  onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="input5" className="form-label">Price</label>
          <input type="number" className="form-control" id="input5" value={newProduct.new_price} required name='new_price' placeholder="Enter Price"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="input6" className="form-label">Rating</label>
          <input type="number" className="form-control" id="input6" value={newProduct.rating} required name='rating' placeholder="Enter rating"  onChange={handleChange}/>
        </div>

        <fieldset className="mb-3">
  <label className="form-label" style={{ marginLeft: '-990px' }}>Trending Products</label>
  <div className="form-check">
    <input className="form-check-input" type="radio"  name="topTrends" id="trendingYes" value="true"   onChange={handleChange}/>
    <label className="form-check-label" htmlFor="trendingYes" style={{ marginLeft: '-1050px' }}>
      Yes
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" name="topTrends" id="trendingNo" value="false"  onChange={handleChange} />
    <label className="form-check-label" htmlFor="trendingNo" style={{ marginLeft: '-1050px' }}>
      No
    </label>
  </div>
</fieldset>

<fieldset className="mb-3">
  <label className="form-label" style={{ marginLeft: '-990px' }}>NewCollections</label>
  <div className="form-check">
    <input className="form-check-input" type="radio" value="true" name="newCollections" id="trendingYes"    onChange={handleChange} />
    <label className="form-check-label" htmlFor="trendingYes" style={{ marginLeft: '-1050px' }}>
      Yes
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" type="radio" value="false" name="newCollections" id="trendingNo"   onChange={handleChange}/>
    <label className="form-check-label" htmlFor="trendingNo" style={{ marginLeft: '-1050px' }}>
      No
    </label>
  </div>
</fieldset>
       
        <div className="mb-3">
          <label htmlFor="input8" className="form-label">Description</label>
          <input type="text" className="form-control" id="input8" name='description' value={newProduct.description} required placeholder="Enter short description about the product"  onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="input9" className="form-label">Detail notes</label>
          <textarea className="form-control" id="input9" rows="3" name='detailOne' value={newProduct.detailOne} required placeholder="Enter some notes about the product"  onChange={handleChange}></textarea>
        </div>


        <button type="submit" className="btn btn-primary me-3">Submit</button>
        <button onClick={()=>navigate("/products")} type="submit" className="btn btn-primary">Back</button>
      </form>
    </div>
  );
};

export default AddForm;



