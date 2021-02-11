import React, {useContext} from 'react';
import './productdetails.css';
import {PRODUCTS} from '../../data/products';
import {SIZES} from '../../data/sizes';
import Ratings from '../../components/Ratings/Ratings';
import Image from 'react-bootstrap/Image';
import {useParams} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ProductDetails = () => {
  const {addProduct} = useContext(CartContext);
  const {productId} = useParams();
  const product = PRODUCTS.find(item => item.id === Number(productId))
  
return (
    <>
    <section className="details">
    <div className="details__container">

    <div className="detail__product">
    <Image src={product.image} className="product_img" alt="item" fluid />

    <div className="detail__text">
    <h3>{product.brand}</h3> 
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
    <p>{product.brand}</p>
    <span>
      <Ratings />
    </span>
    <span className="sizes mt-3">
    <p>Size</p>
    {
      SIZES.map(size => (
      <p key={size.id} className="product_size">
        {size.specific_size}
      </p>
    ))
    }
    </span>
    <h5>{product.price}</h5>
     <div className="details__btn">
        <button className="add_btn" onClick={() => addProduct(product)}>
          Add to Cart
        </button>
     </div>
    </div>
    </div>


    <div className="detail__description">
    <h4>Description</h4>
      <p>{product.long_description}</p>
    </div>
    </div>     
    </section>      
    </>
    )
}


export default ProductDetails;



