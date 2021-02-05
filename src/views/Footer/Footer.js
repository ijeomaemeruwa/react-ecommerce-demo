import React from 'react';
import './footer.css';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiSmartphone} from 'react-icons/fi';
import {GrTwitter, GrFacebook, GrLinkedin} from 'react-icons/gr';

const Footer = () => {
    return (
    <>
    <footer className="footer mx-auto">
     <div className="footer_content row">

     <div>
        <h5>Pages</h5>
      <ul>
         <li>Home</li>
         <li>Product</li>
         <li>Pricing</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
     </div>

    <div>
    <h5>Top Designer Brands</h5>
    <div className="designer_brands">
      <ul>
      <li>Eleanor Edwards</li>
      <li>Ted Robertson</li>
      <li>Annette Russet</li>
      <li>Jenne McKinney</li>
      <li>Collin Russel</li>
    </ul>
    <ul className="designer_list">
      <li>Gloria Richards</li>
      <li>Philip Jones</li>
      <li>Ted Baker</li>
      <li>Marvin Hawkins</li>
      <li>Bruce Simmons</li>
    </ul>
    </div>
    </div>

    <div className="footer_contact">
       <h6>
         <span><HiOutlineLocationMarker /></span> 
         7480 MockingBird Hill 
       </h6> 
       <h6>
         <span><FiSmartphone /></span> 
         (239) 555 0108 
       </h6>
       <div className="social_links">
        <span><GrTwitter /></span>
        <span><GrFacebook /></span>
        <span><GrLinkedin /></span>
       </div>
    </div>
    </div>
    </footer>          
    </>
    )
}

export default Footer
