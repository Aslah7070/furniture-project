import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './UserContext';
import api from "../../axiosInstance/api"




export const CartContext = createContext();

const ProductContext = ({ children }) => {
  const navigate = useNavigate()


  const { activeUser } = useContext(LoginContext)



  //  console.log("on useCart activeUser",activeUser);
  const [cartItems, setCartItems] = useState([])
   console.log("cart",cartItems);


  const cleareCartItem = () => {
    setCartItems([])
  }

  useEffect(() => {
    console.log("activeeee",activeUser);
    
    if (activeUser) {
      console.log("hellooooo");
      
      const cartItemsChanges = async () => {
        try {
          let response = await api.get("/getcart");
          console.log("inside useEffect",response.data.getItem.products.productsId);
          
          setCartItems(response.data.getItem.products)
        } catch (error) {
          console.log("errro",error);
          
          // alert("jsdjjds",error)
        }
      }
      cartItemsChanges()
    }

  }, [activeUser])


  const addToCart = async (product) => {

    console.log("my product", product._id);

    console.log("my product",product);
    
          //  if(activeUser){ 
            // console.log("a",activeUser);
            
      // const itemWithQty={...product,qty:1  }
      //      let response= await axios.get(`http://localhost:4000/Users/${activeUser.id}`)
      //  let currentUserOnDB= response.data
      //  console.log("userCart",currentUserOnDB.cart);
 
  //  let existingItem= currentUserOnDB.cart.find((item)=>item.id===product.id);
  //  if(false){
  //   alert("this item is already in your cart")
  //  }else{


    if (activeUser) {
      console.log("pro id_",product._id);


      let response = await api.post(`/cart`,{productsId:product._id})
      console.log("response",response.data.message);

      alert(response.data.message)
      


    } else {
      navigate("/login")
      alert("please login")
    }
  // };
// }
}
const updateCartProducts=async(productsId,action)=>{
  try {
    const response=await api.put("/updatecart",{productsId,action})
    console.log("update",response.data.updatedCart.products);
    setCartItems(response.data.updatedCart.products)

    
  } catch (error) {
    console.log(error);
    
  }
}

  const removeFromCart = async (itemId) => {
    try {
    
console.log("itrmId",itemId);

      let response=await api.delete("/removecart",{ params: { productsId: itemId } })

      console.log("remove",response.data.values.products );
      setCartItems(response.data.values.products)
      
    } catch (error) {
      console.error("Error eemoving items from the cart", error)

    }

  }
  // const updateServer = async (updateCart) => {
  //   await axios.patch(`http://localhost:4000/Users/${activeUser.id}`, { ...activeUser, cart: updateCart })
  //   setCartItems(updateCart)
  // }

  const decrementQuantity = async (productId) => {
    updateCartProducts(productId,"decrement")
 
  }
  const incrementQuantity = async (productId) => {
    updateCartProducts(productId,"increment")
  
  }
  const byProduct = () => {

    cartItems.length > 0 ? navigate("/payment") : alert("your cart is empty")
  }

  return (
    <CartContext.Provider value={{ setCartItems,  cartItems, removeFromCart, addToCart, activeUser, decrementQuantity, incrementQuantity, byProduct, cleareCartItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default ProductContext
