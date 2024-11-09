


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../footer/footer.css'

// const Footer = () => {
//   return (
//     <footer className="footer bg-dark text-white py-4">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <h5>Customer Service</h5>
//             <ul className="list-unstyled">
//               <li><a href="/help" className="text-white">Help Center</a></li>
//               <li><a href="/returns" className="text-white">Returns</a></li>
//               <li><a href="/shipping" className="text-white">Shipping Info</a></li>
//               <li><a href="/contact" className="text-white">Contact Us</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4 mb-3">
//             <h5>About Us</h5>
//             <ul className="list-unstyled">
//               <li><a href="/about" className="text-white">Company Info</a></li>
//               <li><a href="/careers" className="text-white">Careers</a></li>
//               <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
//               <li><a href="/terms" className="text-white">Terms of Service</a></li>
//             </ul>
//           </div>
//           <div className="col-md-4 mb-3">
//             <h5>Follow Us</h5>
//             <div className="d-flex">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Facebook</a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Instagram</a>
//               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">Twitter</a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col text-center mt-3">
//             <p className="mb-0">&copy; 2024 Your Company Name. All Rights Reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
          
          {/* Customer Service Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-gray-400">Customer Service</h5>
            <ul className="space-y-4">
              <li><a href="/help" className="hover:text-gray-300 transition-colors">Help Center</a></li>
              <li><a href="/returns" className="hover:text-gray-300 transition-colors">Returns</a></li>
              <li><a href="/shipping" className="hover:text-gray-300 transition-colors">Shipping Info</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4 text-gray-400">About Us</h5>
            <ul className="space-y-4">
              <li><a href="/about" className="hover:text-gray-300 transition-colors">Company Info</a></li>
              <li><a href="/careers" className="hover:text-gray-300 transition-colors">Careers</a></li>
              <li><a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Follow Us Section */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-4 text-gray-400">Follow Us</h5>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-xl">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-xl">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-xl">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors text-xl">LinkedIn</a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
