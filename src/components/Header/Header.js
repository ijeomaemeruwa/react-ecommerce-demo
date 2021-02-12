import React, {useContext} from 'react';
import './header.css';
import CustomButton from '../CustomButton/CustomButton';
import Image from 'react-bootstrap/Image';
// import Badge from 'react-bootstrap/Badge';
import user from '../../assets/usericon.png';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const Header = ({ search, onChange }) => {
  const {cartItemsCount} = useContext(CartContext);

    return (
    <>
    <nav className="topnav">
    <div className="topnav_container">

  <div className="topnav_content">
   <div className="topnav_logo">
    <Link to="/" className="header__link">
      <h4>Logo</h4>
    </Link>
  </div>

    <div className="topnav_search_container">
    <div className="search_container">
      <input className="input" type="text" value={search} onChange={onChange} placeholder="Search items.." />
    </div> 
    </div> 
    </div>
    
    <div className="topnav_user">
    <Link to="/signup">
    <CustomButton>Sign In</CustomButton>
     </Link>
    <Link to="/cart" className="header__link">
    <span>
      <AiOutlineShoppingCart />
      <small>{cartItemsCount}</small>
    </span>
    </Link>
    <Image src={user} className="user" alt="user" />
    </div>
  </div>
  </nav>       
    </>
    )
}

export default Header;
