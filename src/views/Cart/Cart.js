import React, {useContext} from 'react';
import './cart.css';
import Footer from '../../views/Footer/Footer';
import Image from 'react-bootstrap/Image';
import {FaHeart, FaTrashAlt} from 'react-icons/fa';
import {IoChevronBackCircleOutline, IoChevronForwardCircleOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const Cart = () => {
  const {
    cartItems, 
    addProduct, 
    removeProduct, 
    clearProduct,
    // subTotal,
    cartTotal
  } = useContext(CartContext);


 if(cartItems.length === 0) {
   return (
   <h3 className="text-center pt-5 empty">
    Your cart is empty <Link to="/">Continue Shopping</Link>
  </h3>
 )
}


return (
<>
<main className="cart__section">
<header className="header">
  <p className="col-md-6">Item</p>
  <p>Quantity</p> 
  <p>Unit Price</p>
  <p>Sub-total</p> 
</header>  

<section className="cart__content">
{
 cartItems.map(item => (
<div key={item.id} className="cart__content-container">
<div className="cart__product col-md-6">
<Image src={item.image} alt="product" fluid />
<div className="product__detail">
  <h4>{item.brand}</h4>
  <h6>{item.brand_description}</h6>
  <div className="product__options">
  <p>
    <span><FaHeart /></span>
    Save Item
  </p>
  <p className="pl-2" onClick={() => clearProduct(item)}>
    <span><FaTrashAlt /></span>
    Remove
  </p>
  </div>
  </div>
  </div>

  <div className="product__quantity">
    <span onClick={() => removeProduct(item)}>
      <IoChevronBackCircleOutline />
    </span>
    <p>{item.quantity}</p>
    <span className="forward" onClick={() => addProduct(item)}>
      <IoChevronForwardCircleOutline />
    </span> 
  </div> 

  <div className="product__unit-price">
    <p>$ {item.price}</p>
  </div>
  <div className="product__sub-total">
    {/* <p>$ {subTotal.toLocaleString()}</p> */}
    <p>$ {item.price}</p>
  </div> 
    </div>
  ))
}
</section>
      
<section className="cart__summary">
  <h4>Total: <span>$ {cartTotal.toLocaleString()}</span></h4>

  <div className="btn_group">
    <Link to="/">
    <button className="shop__btn">Continue Shopping</button>
    </Link>
    <Link to="/signup">
    <button className="checkout__btn">Checkout</button>
    </Link>
  </div>
</section>
</main> 

<Footer />
</>
)
}

export default Cart
