import React from 'react';
// import {PRODUCTS} from '../../data/products';
import {SIZES} from '../../data/sizes';
import detailsImg from '../../assets/img11.jpg';
import Ratings from '../../components/Ratings/Ratings';
import Image from 'react-bootstrap/Image';


const ProductDetails = () => {

const sizes = SIZES.map(size => (
    <div key={size.id}>
        <p>{size.specific_size}</p>
    </div>
))

return (
    <>
    <section className="details">
    <div className="details__container">

    <div>
    <Image src={detailsImg} alt="item" fluid />

    <div>
    <h3>Vintage Typewriter</h3> 
    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
    <p>Brand: Vintage</p>
    <span><Ratings />  </span>
    <p>Size {sizes}</p>
    <p>$49.50</p>

    <div><button>Add to Cart</button></div>
    </div>
    </div>

    <div className="detail__description">
    <h4>Description</h4>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. <br />
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. <br />
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
      dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    </div>     
    </section>      
    </>
    )
}

export default ProductDetails



