

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/dashboard.css"
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-md-6">
          <div className="card shadow-sm no-hover">
            <img 
              src="https://img.freepik.com/premium-photo/dark-room-with-brown-leather-chair-radiator_755721-738.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais" 
              className="card-img-top" 
              alt="Products"
            />
            <div className="card-body">
              <h1 className="card-title"> PRODUCTS</h1>
              <p className="card-text">
                Here is a list of all products available in the store.
              </p>
            <Link to="/products"><button className="btn btn-primary" >View Products</button></Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card shadow-sm no-hover">
            <img 
              src="https://www.infotectraining.com/sites/default/files/field/image/infotec_75.png" 
              className="card-img-top" 
              alt="Users"
            />
            <div className="card-body">
              <h1 className="card-title"> CONTRIBUTORS</h1>
              <p className="card-text">
                View the details of all registered users.
              </p>
              
              <Link to="/clients"><button className="btn btn-primary" >View Users</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
