import React, {useContext} from 'react';
import './productlist.css';
import Image from 'react-bootstrap/Image';
import CustomButton from '../../../components/CustomButton/CustomButton';
import Ratings from '../../../components/Ratings/Ratings';
import ProductFilters from '../../../components/ProductFilters/ProductFilters';
import {Link} from 'react-router-dom';
import {VscMenu} from 'react-icons/vsc';
import { CartContext } from '../../../context/CartContext';


const ProductsList = ({ toggle }) => {
const {
    addProduct, 
    filtered, 
    search, 
    handleChange
  } = useContext(CartContext);


return (
<>
<section className="product__section">

<div className="mobile_view">
<div className="mobile_icon" onClick={toggle}>
  <VscMenu />
</div>
<div className="topnav_search_container">
  <div className="product_search">
  <input 
    className="input" 
    type="text" 
    value={search} 
    onChange={handleChange} 
    placeholder="Search items.." 
  />
  </div> 
  </div> 
</div>

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
  filtered.map((item) => (
  <div key={item.id} className="card__container">
  <div className="product__card">

<Link 
  className="link"
  to={{pathname: `/productdetails/${item.id}`}}
>
  <div className="card__img">
  <Image src={item.image} alt="product" fluid />
  </div>
  </Link>
<div className="card__footer">
  <h6>{item.brand ? item.brand : null}</h6>
  <p>{item.brand_description ? item.brand_description : null}</p>
  <div className="price">
      <span className="item_price">${item.price}</span>
      <span>{item.discont ? item.discount : null}</span>
  </div> 
  <p>{item.shipping_detail}</p> 
  <div className="details_add">
  <p><Ratings /></p>
  <CustomButton products__btn onClick={() => addProduct(item)}>
    <small>Add to cart</small>
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
