import axios from 'axios'
import React, {  createContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const LoginContext= createContext()
const UserContext = ({children}) => {
 
  const navigate= useNavigate()
    const{id}=useParams()
    console.log("useparam",id);
    


    //all states starts........
    const initial={
        username:"",
        password:""
      }
    
    const [datas,setDatas]= useState(initial)
    const [ProductDatas, setProductDatas] = useState([]);
    const [customerse,setCustomerse]=useState([])
    const storedAdmindata=localStorage.getItem("adminData")
    const [admin,setAdimin]=useState(storedAdmindata?JSON.parse(storedAdmindata):null)
    const storedActiveUser=localStorage.getItem("activeUserData")
    const [activeUser,setActiveUser]=useState(storedActiveUser?JSON.parse(storedActiveUser):null)
    
  
    
    //all states end........



     
    
 
    const handleChange=(e)=>{
            
            const {name,value}=e.target;
            setDatas({...datas,[name]:value}); 
    }

    //login function start........
    const handleSubmission = async (e) => {
      e.preventDefault();
      try {
        
        let ress = await axios.get("http://localhost:4000/Users");
        let UsersFromDB = ress.data;


        let user = UsersFromDB.find((userData) =>userData.username === datas.username&&userData.password===datas.password&&userData.admin===false );
        let isAdmin=UsersFromDB.find((userData)=>userData.username === datas.username&&userData.password===datas.password&&userData.admin===true)



    //login user or admin  start........
        if(user){
          console.log("on user",user.blocked);
          
          if(user.blocked===false){
            localStorage.setItem("activeUserData",JSON.stringify(user))
            setActiveUser(user)  
            alert("Login successfully")
            navigate("/home") 
            setDatas({ username:"",password:""}) 
            
          }else{
            alert("You are blocked by admin")
          }
         
        }else if(isAdmin){
          localStorage.setItem("adminData",JSON.stringify(isAdmin))
          setAdimin(isAdmin)
          navigate("/")
        }else{
          alert("Please check your userName & pssword ")
        }
        //login user or admin  end.............
      } catch (error) {
        console.error('There was an error making the request:', error);
      } 
}
//login function end........



//fetch all users on admin page start .......
useEffect(()=>{
  try {
    const  fetchUsers= async ()=>{
      let response=await axios.get(`http://localhost:4000/Users`);
      const users=response.data
      setCustomerse(users)  
    } 
    fetchUsers()
  } catch (error) {
    console.log(error);
  }
},[])
//fetch all users on admin page end .......



//admin logout........
const adminLogOut=()=>{
  localStorage.removeItem("adminData")
  setAdimin(null)
  navigate("/home")
}


//fetching all products.....
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Products');
        setProductDatas(response.data);
        // console.log("on length",response.data.length);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);



//admin deleting product start..........
  const deleteProduct=async(productID)=>{

     let userConfirmed= window.confirm("Are you sure you want to delete?")

     if(userConfirmed){
     await axios.delete(`http://localhost:4000/Products/${productID}`)
     navigate("/products")
     }else{
      alert("cancel successfully")
     }     
}
//admin deleting product end..........



return(
    <LoginContext.Provider value={{handleSubmission,handleChange,datas,activeUser,ProductDatas,setActiveUser,admin,customerse,adminLogOut,deleteProduct,}}>
    {children}
</LoginContext.Provider>
)

}

export default UserContext
