import React from 'react';
import './sidenav.css';
import CustomButton from '../CustomButton/CustomButton';
import {BsFilter} from 'react-icons/bs';

const SideNav = () => {
    return (
    <>
    <aside className="sidenav">
    <div className="sidenav_container">

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
  {/* {
    SIDE_NAV_ITEMS.map(item => (
    <div key={item.id} className="sidenav_content">
      <h6>{item.category}</h6>
      {item.list.map(listItem => (
        <li key={listItem.id} style={{background: listItem.bg, borderLeft: listItem.border}}>
          <img src={listItem.icon} alt={listItem.icon} />
          {listItem.title}
        </li>
      ))}
    </div>
    ))
  } */}
  </div>
  </aside>      
    </>
    )
}

export default SideNav;
