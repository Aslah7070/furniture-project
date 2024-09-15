import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../contextFolder/UserContext'
import { Link } from 'react-router-dom';
import "./style/products.css"
import axios from 'axios';

const Products = () => {
     const{ProductDatas,deleteProduct}= useContext(LoginContext)
     const [producesLists,setProductLists]=useState([])
     const [listCategory,setListCategory]=useState([])

     useEffect(()=>{
  try {
    const fetchProducts= async ()=>{
      let response= await axios.get(`http://localhost:4000/Products`);
      setProductLists(response.data)
      setListCategory(response.data)
    }
    fetchProducts()
  } catch (error) {
    console.log( " Error on  fetching Products",error);
  }
  },[ProductDatas])

  const deleteProductOnlist=async(productId)=>{
    try {
      await deleteProduct(productId)
      setListCategory(listCategory.filter((pro)=>pro.id!==productId))
    } catch (error) {
      console.log("Error from list delete button ",error);
      
    }
  }






  const handleDropdownChange=(e)=>{
    console.log(e.target.value);
    let selectValue=e.target.value
    if(selectValue==="option1"){
      console.log("optio 1 worked");
      handleAllProducts()
    }else if(selectValue==="option2"){
      handleDining()
    }else if(selectValue==="option3"){
      handleRoom()
    }else if(selectValue==="option4"){
      handleLiving()
    }else if(selectValue==="option5"){
      handleDecoretion()
    }
  }
  
  const handleAllProducts=()=>{
    let allCategory=producesLists.filter((products)=>products);
    console.log("all",allCategory);
    setListCategory(allCategory);
  }
  const handleDining=()=>{
    let allCategory=producesLists.filter((products)=>products.type==="Dining Room Furniture");
    setListCategory(allCategory)
  }
  const handleRoom=()=>{
    let allCategory=producesLists.filter((products)=>products.type==="Bedroom Furniture");
    setListCategory(allCategory)
  }
  const handleLiving=()=>{
    let allCategory=producesLists.filter((products)=>products.type==="Living Room Furniture");
    setListCategory(allCategory)
  }
  const handleDecoretion=()=>{
    let allCategory=producesLists.filter((products)=>products.type==="Decoretion Furniture");
    setListCategory(allCategory)
  }
 
     
     
  return (
    <div>
      
  <select id="dropdown" onChange={handleDropdownChange}>
  <option value="" >Select a category</option>
    <option value="option1">All</option>
    <option value="option2">Dining Products</option>
    <option value="option3">Bedroom products</option>
    <option value="option4">Living products</option>
    <option value="option5">Decoretion Products</option>
  </select>
  <Link to="/addingform" ><button id='addProductButton' >Add Products</button></Link>
  
      <table>
        <thead>
         <tr>
         <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>category</th>
          <th>Price</th>
          <th>More</th>
          <th>Delete Option</th>
         </tr>
        </thead>
        <tbody>
             {
              listCategory&&listCategory.map((datas,index)=>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td><img id='image' src={datas.image} alt={datas.imageCategory} /></td>
                  <td>{datas.imageCategory}</td>
                  <td>{datas.type}</td>
                  <td className='text-success '>₹{datas.offerPrice}</td>
                  <td><Link to={`/productslistdetails/${datas.id}`}><button>View</button></Link></td>
                  <td><button onClick={()=>deleteProductOnlist(datas.id)} className='bg-danger'>Delete</button></td>
                </tr>
              ))
             }
        </tbody>
      </table>
    </div>
  )
}

export default Products
