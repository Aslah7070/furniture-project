// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';

// const EditForm = () => {

//     let initial={
//         name:"",
//         category:"",
//         image:"",
//         new_price:"",
//         old_price:"",
//         description:"",
//         rating:"",
//         topTrends:"",
//         newCollections:"",
//         detailOne:""
//     }
  
// const [product,setProduct]=useState(initial);
// console.log("state",product)
//   let navigate=useNavigate()
//       const{id}=useParams()

//     useEffect(()=>{
      
//        const fetchProduct= async ()=>{
//         let response= await axios.get(`http://localhost:4000/Products/${id}`);
//       setProduct(response.data)
//        }

//        fetchProduct()
//     },[id])
//     const handleChange=(e)=>{
//               const {name,value}=e.target
//               setProduct({...product,[name]:value})
//     }
//     const handlesubmit=(e)=>{
//            e.preventDefault()

//            const editUpdating= async()=>{
//             await axios.put(`http://localhost:4000/Products/${id}`,product)
            
//             navigate(`/productslistdetails/${id}`)
//            }
//                    editUpdating() 
//     }
  
    
    
 
//   return (
//     <div className="container mt-4">
//     <h2>Form Title</h2>
//     <form className='form  p-4 rounded' onSubmit={handlesubmit}>
//       <div className="mb-3">
//         <label htmlFor="input1" className="form-label">Name</label>
//         <input type="text" className="form-control" id="input1" value={product.name} required name='name' placeholder="Enter Product Name" onChange={handleChange} />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input2" className="form-label">Category</label>
//         <input type="text" className="form-control" id="input2" value={product.category} required name='category' placeholder="Enter the category"  onChange={handleChange}/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input3" className="form-label">Image URL</label>
//         <input type="text" className="form-control" id="input3" value={product.image} required name='image' placeholder="Enter image URL"  onChange={handleChange}/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input4" className="form-label">MRP Rate</label>
//         <input type="number" className="form-control" id="input4" value={product.old_price} required name='old_price' placeholder="Enter MRP rate"  onChange={handleChange} />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input5" className="form-label">Price</label>
//         <input type="number" className="form-control" id="input5" value={product.new_price} required name='new_price' placeholder="Enter Price"  onChange={handleChange}/>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input6" className="form-label">Rating</label>
//         <input type="number" className="form-control" id="input6" value={product.rating} required name='rating' placeholder="Enter rating"  onChange={handleChange}/>
//       </div>

//       <fieldset className="mb-3">
// <label className="form-label" style={{ marginLeft: '-990px' }}>Trending Products</label>
// <div className="form-check">
//   <input className="form-check-input" type="radio"  name="topTrends" id="trendingYes" value={product.topTrends} checked={product.topTrends === true}   onChange={handleChange}/>
//   <label className="form-check-label" htmlFor="trendingYes" style={{ marginLeft: '-1050px' }}>
//     Yes
//   </label>
// </div>
// <div className="form-check">
//   <input className="form-check-input" type="radio" name="topTrends" id="trendingNo" value={product.topTrends} checked={product.topTrends === false}   onChange={handleChange} />
//   <label className="form-check-label" htmlFor="trendingNo" style={{ marginLeft: '-1050px' }}>
//     No
//   </label>
// </div>
// </fieldset>

// <fieldset className="mb-3">
// <label className="form-label" style={{ marginLeft: '-990px' }}>NewCollections</label>
// <div className="form-check">
//   <input className="form-check-input" type="radio" value={product.newCollections}name="newCollections" id="trendingYes"    onChange={handleChange} />
//   <label className="form-check-label" htmlFor="trendingYes" style={{ marginLeft: '-1050px' }}>
//     Yes
//   </label>
// </div>
// <div className="form-check">
//   <input className="form-check-input" type="radio" value={product.newCollections} name="newCollections" id="trendingNo"   onChange={handleChange}/>
//   <label className="form-check-label" htmlFor="trendingNo" style={{ marginLeft: '-1050px' }}>
//     No
//   </label>
// </div>
// </fieldset>
     
//       <div className="mb-3">
//         <label htmlFor="input8" className="form-label">Description</label>
//         <input type="text" className="form-control" id="input8" name='description' value={product.description} required placeholder="Enter short description about the product"  onChange={handleChange} />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="input9" className="form-label">Detail notes</label>
//         <textarea className="form-control" id="input9" rows="3" name='detailOne' value={product.detailOne} required placeholder="Enter some notes about the product"  onChange={handleChange}></textarea>
//       </div>


//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   </div>
//   )
// }

// export default EditForm





import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {

    let initial = {
        name: "",
        category: "",
        image: "",
        new_price: "",
        old_price: "",
        description: "",
        rating: "",
        topTrends: false,
        newCollections: false,
        detailOne: ""
    }

    const [product, setProduct] = useState(initial);
    console.log("state", product)
    let navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            let response = await axios.get(`http://localhost:4000/Products/${id}`);
            setProduct(response.data);
        }

        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value === "true" });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const editUpdating = async () => {
            await axios.put(`http://localhost:4000/Products/${id}`, product);
            navigate(`/productslistdetails/${id}`);
        }

        editUpdating();
    }

    return (
        <div className="container mt-4">
            <h2>Form Title</h2>
            <form className='form  p-4 rounded' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="input1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="input1" value={product.name} required name='name' placeholder="Enter Product Name" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input2" className="form-label">Category</label>
                    <input type="text" className="form-control" id="input2" value={product.category} required name='category' placeholder="Enter the category" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input3" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="input3" value={product.image} required name='image' placeholder="Enter image URL" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input4" className="form-label">MRP Rate</label>
                    <input type="number" className="form-control" id="input4" value={product.old_price} required name='old_price' placeholder="Enter MRP rate" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input5" className="form-label">Price</label>
                    <input type="number" className="form-control" id="input5" value={product.new_price} required name='new_price' placeholder="Enter Price" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input6" className="form-label">Rating</label>
                    <input type="number" className="form-control" id="input6" value={product.rating} required name='rating' placeholder="Enter rating" onChange={handleChange} />
                </div>

            
<fieldset className="mb-3">
    <label className="form-label">Trending Products</label>
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            name="topTrends"
            id="trendingYes"
            value="true"
            checked={product.topTrends === true}
            onChange={handleRadioChange}
        />
        <label className="form-check-label" htmlFor="trendingYes">
            Yes
        </label>
    </div>
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            name="topTrends"
            id="trendingNo"
            value="false"
            checked={product.topTrends === false}
            onChange={handleRadioChange}
        />
        <label className="form-check-label" htmlFor="trendingNo">
            No
        </label>
    </div>
</fieldset>


<fieldset className="mb-3">
    <label className="form-label">New Collections</label>
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            name="newCollections"
            id="newCollectionYes"
            value="true"
            checked={product.newCollections === true}
            onChange={handleRadioChange}
        />
        <label className="form-check-label" htmlFor="newCollectionYes">
            Yes
        </label>
    </div>
    <div className="form-check">
        <input
            className="form-check-input"
            type="radio"
            name="newCollections"
            id="newCollectionNo"
            value="false"
            checked={product.newCollections === false}
            onChange={handleRadioChange}
        />
        <label className="form-check-label" htmlFor="newCollectionNo">
            No
        </label>
    </div>
</fieldset>


                <div className="mb-3">
                    <label htmlFor="input8" className="form-label">Description</label>
                    <input type="text" className="form-control" id="input8" name='description' value={product.description} required placeholder="Enter short description about the product" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input9" className="form-label">Detail notes</label>
                    <textarea className="form-control" id="input9" rows="3" name='detailOne' value={product.detailOne} required placeholder="Enter some notes about the product" onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditForm;
