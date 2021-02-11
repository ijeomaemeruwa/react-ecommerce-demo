import React from 'react';
import './sidenav.css';
import CustomButton from '../CustomButton/CustomButton';
import {BsFilter} from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';

const SideNavMobile = ({ isOpen, toggle}) => {
return (
    <>
    <aside className={isOpen ? "sidenav_mobile_menu active" : "sidenav_mobile_menu"}>
    <div className="sidenav_container" onClick={toggle}>
     
    <div className="close_icon" onClick={toggle}>
    <VscClose />
    </div>

    <div className="sidenav_button_container">
    <CustomButton sidenav__btn><BsFilter/> Departments</CustomButton>
    </div>

    <div className="sidenav__menu">
    <div>
        <h5>All Categories</h5>
        <p>Ecommerce patterns</p>
    </div>
    <div className="sidenav__list">
    <ul>
        <li>Electronics</li>
        <li>Cell Phones and Smartphones</li>
        <li>Cell Phone Accessories</li>
        <li>Cell Phone Gadgets</li>
        <li>Applications</li>
        <li>Smart Watches</li>
    </ul>
    </div>
    </div>
  </div>
  </aside>       
    </>
    )
}


export default SideNavMobile;
