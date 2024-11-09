import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie';

export const LoginContext = createContext()
const UserContext = ({ children }) => {

  const navigate = useNavigate()
  const { id } = useParams()

  const initial = {
    username: "",
    password: ""
  }

  const [datas, setDatas] = useState(initial)
  const [ProductDatas, setProductDatas] = useState([]);
  const [customerse, setCustomerse] = useState([])
  const storedAdmindata = localStorage.getItem("adminData")
  const [admin, setAdimin] = useState(storedAdmindata ? JSON.parse(storedAdmindata) : null)
  const storedActiveUser = localStorage.getItem("activeUserData")
  const [activeUser, setActiveUser] = useState(storedActiveUser ? JSON.parse(storedActiveUser) : null)



  //all states end........






  const handleChange = (e) => {

    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  }

  //login function start........
  const handleSubmission = async (e) => {
    e.preventDefault();
    try {

      let ress = await axios.post("http://localhost:3000/login", {username:datas.username,password:datas.password},{withCredentials:true});
      let UsersFromDB = ress.data;
      // console.log("login details", UsersFromDB);

      // const { userToken, user } = UsersFromDB
      // Cookies.set("user", JSON.stringify(user))
      // Cookies.set("userToken", JSON.stringify(userToken))

      //  console.log("cookieessToken",token);


      alert("Login successfully")
      setDatas({ username: "", password: "" })
      navigate("/home")




      //login user or admin  end.............
    } catch (error) {
      console.error('There was an error making the request:', error);
    }
  }

  // useEffect(() => {
  //   let user = Cookies.get("user")
  //   let token = Cookies.get("userToken")
  //   let activeUser = user&&JSON.parse(user)
  //   console.log("cookieessiddd", activeUser);
  //   setActiveUser(activeUser)
  // }, [])

  //login function end........

  //admin logout........
  const adminLogOut = () => {
    localStorage.removeItem("adminData")
    setAdimin(null)
    navigate("/home")
  }


  //fetching all products.....
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProductDatas(response.data.result);
        console.log("on length", response.data.result);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);



  //admin deleting product start..........
  const deleteProduct = async (productID) => {

    let userConfirmed = window.confirm("Are you sure you want to delete?")

    if (userConfirmed) {
      await axios.delete(`http://localhost:4000/Products/${productID}`)
      navigate("/products")
    } else {
      alert("cancel successfully")
    }
  }
  //admin deleting product end..........



  return (
    <LoginContext.Provider value={{ handleSubmission, handleChange, datas, activeUser, ProductDatas, setActiveUser, admin, customerse, adminLogOut, deleteProduct, }}>
      {children}
    </LoginContext.Provider>
  )

}

export default UserContext






