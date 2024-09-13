


import React, { useContext } from 'react';
import { MdOutlineInventory2, MdProductionQuantityLimits } from 'react-icons/md';
import { FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { HiMiniSquares2X2 } from "react-icons/hi2";
import styles from './Sidebar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link }from "react-router-dom"
import { LoginContext } from '../contextFolder/UserContext';

const Sidebar = () => {
   const {adminLogOut}= useContext(LoginContext)
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileImageContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_640.png"
          alt="Profile"
          className={styles.profileImage}
        />
        <h2 className={styles.profileName}>Aslah.C</h2>
        <p className={styles.profileRole}>Administrator</p>
      </div>

      <nav className={styles.navMenu}>
        <Link to="/" className="text-decoration-none">
        <div className={styles.navItem}>
          <HiMiniSquares2X2 size={20} className={styles.navIcon} />
          <label className={styles.navLabel}>Dashboard</label>
        </div>
        </Link>

       <Link to="/products" className="text-decoration-none">
       <div className={styles.navItem}>
          <MdProductionQuantityLimits size={20} className={styles.navIcon}/>
          <label className={styles.navLabel}>Products</label>
        </div></Link>

           <Link to="/clients" className="text-decoration-none">
           <div className={styles.navItem}>
          <FaUsers size={20} className={styles.navIcon} />
          <label className={styles.navLabel}>Users</label>
        </div></Link>
        

        <div onClick={()=>adminLogOut()} className={styles.navItem}>
          <FaSignOutAlt size={20} className={styles.navIcon} />
         <label  className={styles.navLabel}>Log Out</label>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
