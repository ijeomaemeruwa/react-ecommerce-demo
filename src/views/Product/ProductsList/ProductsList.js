import React from 'react';
import './productlist.css';
import {PRODUCTS} from '../../../data/products';
import Image from 'react-bootstrap/Image';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {AiOutlineHeart} from 'react-icons/ai';


const ProductsList = () => {
    return (
    <>
    <section className="product__section">
    <div className="product__filters">

    </div>
    <div className="product__tags">

    </div>

    <div className="products__container">
    {
    PRODUCTS.map((item) => (
    <div key={item.id} className="card__container">
    <div className="product__card">

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
            <p>ratings</p>
            <CustomButton products__btn>
             <span><AiOutlineHeart /></span>
             Watch
            </CustomButton>
        </div> 
     </div>

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
