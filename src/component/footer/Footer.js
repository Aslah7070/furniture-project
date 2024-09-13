


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/help" className="text-white">Help Center</a></li>
              <li><a href="/returns" className="text-white">Returns</a></li>
              <li><a href="/shipping" className="text-white">Shipping Info</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">Company Info</a></li>
              <li><a href="/careers" className="text-white">Careers</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mt-3">
            <p className="mb-0">&copy; 2024 Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
