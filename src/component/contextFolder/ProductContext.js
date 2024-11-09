import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './UserContext';




export const CartContext = createContext();

const ProductContext = ({ children }) => {
  const navigate = useNavigate()


  const { activeUser } = useContext(LoginContext)



  //  console.log("on useCart activeUser",activeUser);
  const [cartItems, setCartItems] = useState([])
  //  console.log("khdfh",cartItems);


  const cleareCartItem = () => {
    setCartItems([])
  }

  useEffect(() => {
    if (activeUser) {
      const cartItemsChanges = async () => {
        try {
          let response = await axios.get(`http://localhost:3000/getcart/${activeUser.id}`);
          setCartItems(response.data.cart)
        } catch (error) {
          alert(error)
        }
      }
      cartItemsChanges()
    }

  }, [activeUser])


  const addToCart = async (product) => {
    console.log("my product", product._id);

    if (activeUser) {
      console.log(product.id);


      let response = await axios.post(`http://localhost:3000/cart`, { productsId: product._id }, { withCredentials: true })


    } else {
      navigate("/login")
      alert("please login")
    }
  };


  const removeFromCart = async (itemId, index) => {
    try {
      let response = await axios.get(`http://localhost:4000/Users/${activeUser.id}`);
      let userData = response.data;

      // console.log(userData);
      let updatedCart = userData.cart.filter((item) => item.id !== itemId)
      // console.log(updatedCart);
      await axios.patch(`http://localhost:4000/Users/${activeUser.id}`, {
        ...userData, cart: updatedCart
      })

      setCartItems(updatedCart)
    } catch (error) {
      console.error("Error eemoving items from the cart", error)

    }

  }
  const updateServer = async (updateCart) => {
    await axios.patch(`http://localhost:4000/Users/${activeUser.id}`, { ...activeUser, cart: updateCart })
    setCartItems(updateCart)
  }

  const decrementQuantity = async (productId) => {
    const updateCart = cartItems.map((item) => item.id === productId ? { ...item, qty: item.qty - 1 } : item)

    await updateServer(updateCart)
  }
  const incrementQuantity = async (productId) => {
    const updateCart = cartItems.map((item) => item.id === productId ? { ...item, qty: item.qty + 1 } : item)
    await updateServer(updateCart)
  }
  const byProduct = () => {

    cartItems.length > 0 ? navigate("/payment") : alert("your cart is empty")
  }

  return (
    <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, activeUser, decrementQuantity, incrementQuantity, byProduct, cleareCartItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default ProductContext
