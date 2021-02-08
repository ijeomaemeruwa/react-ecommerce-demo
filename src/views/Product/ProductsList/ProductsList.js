import React from 'react';
import './productlist.css';
import {PRODUCTS} from '../../../data/products';
import Image from 'react-bootstrap/Image';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {AiOutlineHeart} from 'react-icons/ai';
import Ratings from '../../../components/Ratings/Ratings';
import ProductFilters from '../../../components/ProductFilters/ProductFilters';
import {Link} from 'react-router-dom';


const ProductsList = () => {
    return (
    <>
    <section className="product__section">
    <div>
     <ProductFilters />
    </div>
    <div className="product__tags">
      <h6>Related</h6>
      <p>worldwide shipping</p>
      <p>under $50</p>
      <p>plastic plugs</p>
      <p>sucker shoes</p>
      <p>vintage typewriter</p>
    </div>

    <div className="products__container">
    {
    PRODUCTS.map((item) => (
    <div key={item.id} className="card__container">
    <div className="product__card">

    <Link 
        className="link"
        to="/productdetails"
        // to={{ pathname: `/productdetails/${item.id}`, 
        // state: { item: item.brand } }}>
    >
     <div className="card__img">
     <Image src={item.image} alt="product" fluid />
     </div>

     <div className="card__footer">
        <h6>{item.brand ? item.brand : null}</h6>
        <p>{item.brand_description ? item.brand_description : null}</p>
        <div className="price">
            <span className="item_price">
                {item.price}
            </span>
            <span>{item.discont ? item.discount : null}</span>
        </div> 
        <p>{item.shipping_detail}</p> 
        <div className="details">
            <p><Ratings /></p>
            <CustomButton products__btn>
             <span><AiOutlineHeart /></span>
             Watch
            </CustomButton>
        </div> 
     </div>
    </Link>
    </div>
    </div>   
    )) 
    }
    </div>
    </section>
    </>
    )
}

export default ProductsList;
