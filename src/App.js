

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Home/Login';
import { Routes, Route } from 'react-router-dom';
import Signup from './component/Home/SignUp';
import NavBar from './component/Header/NavBar';
import Home from './component/Home/Home';
import Living from './component/MyCategories/Living';
import Bedroom from './component/MyCategories/Bedroom';
import Dining from './component/MyCategories/Dining';
import Deco from './component/MyCategories/Deco';
import ProductDetails from './component/Home/Types/ProductDetails';
import AddToCart from './component/Home/Types/AddToCart';
// import LoginChecking from './component/Home/LoginChecking';
import PaymentSection from './component/Home/PaymentSection';
import Footer from './component/footer/Footer';
import { useContext } from 'react';
import { LoginContext } from './component/contextFolder/UserContext';
import Admin from './component/admin/Admin';
import Clients from './component/admin/Clients';
import Products from './component/admin/Products';
import Dashboard from './component/admin/Dashboard';
import ClientDetails from './component/admin/ClientDetails';
import ProductsListD from './component/admin/ProductsListD';
import AddForm from './component/admin/AddForm';
import EditForm from './component/admin/EditForm';





function App() {

  const {admin}=useContext(LoginContext)

return (
  <div className="App">
      {
    !admin?(
      <div >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/living" element={<Living />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/decor" element={<Deco />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<AddToCart />} />
          {/* <Route path="/userchecking" element={<LoginChecking/>} /> */}
          <Route path="/payment" element={<PaymentSection/>} />
          <Route path="/footer" element={<Footer/>} />
          
          
        </Routes>
      </div>
    ):(
      <div>
         
  <Routes>
    
<Route path="/" element={<Admin/>} >
<Route index  element={<Dashboard/>}/>
<Route path="clients"element={<Clients/>} />
<Route path="clientslists/:id"element={<ClientDetails/>} />
<Route path='products' element={<Products/>}/>
<Route path='productslistdetails/:id' element={<ProductsListD/>}/>
<Route path='addingform' element={<AddForm/>}/>
<Route path='editingform/:id' element={<EditForm/>}/>

</Route>
</Routes>
      </div>
    )
  }
  </div>
)
  
  }




export default App;
