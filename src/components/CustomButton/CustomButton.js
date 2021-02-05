import React from 'react';
import './custombutton.css';

const customButton = ({ children, products__btn, sidenav__btn, ...otherProps }) => {
    return (
    <>
    <div>
    <button className= { 
        `${products__btn ? 'products__btn': ''} 
        ${sidenav__btn ? 'sidenav__btn': ''} 
        custom__btn`
        } 
        
        {...otherProps}
    >
      {children}   
    </button>     
    </div>       
    </>
    )
}

export default customButton
