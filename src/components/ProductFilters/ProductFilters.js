import React from 'react';
import './productfilters.css';
// import {MdDashboard} from 'react-icons/md';
// import {CgDisplayFullwidth} from 'react-icons/cg';


const ProductFilters = () => {
return (
<>
<section className="product__filters">
<div className="filters">
<select>
<option value="Wellness">Wellness</option>
</select>
<select>
<option value="Free Shipping">Free Shipping</option>
</select>
<select>
<option value="Delivery options">Delivery options</option>
</select>
</div> 
</section>      
</>
)
}

export default ProductFilters
