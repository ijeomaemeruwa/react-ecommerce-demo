import React from 'react';
import './header.css';
import CustomButton from '../CustomButton/CustomButton';
import Image from 'react-bootstrap/Image';
import user from '../../assets/usericon.png';
import {AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
// AiOutlineSearch, 


const Header = () => {
    return (
    <>
    <nav className="topnav">
    <div className="topnav_container">

   <div className="topnav_content">
   <div className="topnav_logo">
    <Link to="/"><h4><AiOutlineMenu /> Logo</h4></Link>
    </div>

    <div className="topnav_search_container">
    <div className="search_container">
      {/* <AiOutlineSearch /> */}
      <input className="input" type="search" placeholder="Search items.." />
    </div> 
    </div> 
    </div>
    
   
    <div className="topnav_user">
     <CustomButton>Sign In</CustomButton>
     <span><AiOutlineShoppingCart /></span>
     <Image src={user} className="user" alt="user" />
    </div>

    </div>
    </nav>       
    </>
    )
}

export default Header;
