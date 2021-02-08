import React from 'react';
import './cart.css';
import Footer from '../../views/Footer/Footer';
import cartImg from '../../assets/img11.jpg';
import Image from 'react-bootstrap/Image';
import {FaHeart, FaTrashAlt} from 'react-icons/fa';


const Cart = () => {
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
  <div className="cart__content-container">

    <div className="cart__product col-md-6">
    <Image src={cartImg} alt="product" fluid />
    <div className="product__detail">
        <h4>Vintage Typewriter</h4>
        <h6>Lorem ipsum dolor sit amer sit</h6>
       <div className="product__options">
        <p>
            <span><FaHeart /></span>
            Save Item
        </p>
        <p className="pl-3">
            <span><FaTrashAlt /></span>
            Remove
        </p>
       </div>
    </div>
    </div>

    <div className="product__quantity">
       <p>1</p> 
    </div> 
    <div className="product__unit-price">
     <p>$49.50</p>
    </div>
    <div className="product__sub-total">
      <p>$49.50</p>
    </div>
  </div>  
</section>
      
<section className="cart__summary">
  <h4>Total: <span>$49.50</span></h4>

  <div className="btn_group">
    <button className="shop__btn">Continue Shopping</button>
    <button className="checkout__btn">Checkout</button>
  </div>
</section>
</main> 

<Footer />
</>
)
}

export default Cart
