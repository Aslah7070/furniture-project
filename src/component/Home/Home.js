
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./HomeStyleFiles/Home.css";
import Treanding from './Types/Treanding';
import NewCollections from './Types/NewCollections';
import Furniture from './Types/Furniture';
import ShopeByCategories from './Types/ShopeByCategories';
import Footer from '../footer/Footer';

const Home = () => {

 return(
  <div>
    <Furniture/>
     <ShopeByCategories/>
      {/* <Treanding/> */}
      <NewCollections/>
      <Footer/>
     
  </div>
 )


}

export default Home;







