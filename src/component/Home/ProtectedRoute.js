import React, { useContext } from 'react'
import { MyContext } from '../contextFolder/AllContext'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
   const{activeUser}= useContext(MyContext)
   console.log("fromprotected ",activeUser);
//    localStorage.removeItem("activeUserData")

   if(activeUser){
    return <Navigate to={"/userchecking"}/>
    
   }else{
    return <Navigate to={"/userchecking"}/>
   }
   

    
  
}

export default ProtectedRoute
