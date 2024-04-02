import React from 'react';
import './Contractor.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import profilePic from "./Images/profile.png";
import { Link } from 'react-router-dom';

function Contractor() {
  return (
 
        <>
        <Navbar />
        <div className='container'>
        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Ram Patil</h3>
          <p className='area-name'>Hadpsar Lene No:3</p>
          <p>  <a href='tel' className='text-none' >📞 45415121512</a></p>
          <button className='contact-now'><Link to="/contactcard" className='text-none'>Send Us Message</Link></button>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Shubham Pund</h3>
          <p className='area-name'>Shivaji Nagar</p>
          <p>  <a href='tel' className='text-none' >📞 45415121512</a></p>
          <button className='contact-now'><Link to="/contactcard" className='text-none'>Send Us Message</Link></button>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>Anand Gund</h3>
          <p className='area-name'>Shewalewadi Nandini Dreams</p>
          <p>  <a href='tel' className='text-none' >📞 45415121512</a></p>
          <button className='contact-now'><Link to="/contactcard" className='text-none'>Send Us Message</Link></button>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" /> 
          <h3 className='contractor-name'>vivek Patil</h3>
          <p className='area-name'>pimpri chinchwad</p>
          <p>  <a href='tel' className='text-none' >📞 45415121512</a></p>
          <button className='contact-now'><Link to="/contactcard" className='text-none'>Send Us Message</Link></button>
        </div>

       
                  
        </div>
        <Footer />
        
        </>
    
  )
}

export default Contractor