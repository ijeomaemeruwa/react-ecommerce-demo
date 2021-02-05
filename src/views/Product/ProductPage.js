import React from 'react';
import './productpage.css';
import SideNav from '../../components/SideNav/SideNav';
import ProductsList from './ProductsList/ProductsList';
import Footer from '../Footer/Footer';


const Products = () => {
    return (
    <>
    <section >
    <div className="dashboard">
    <div>
    <SideNav />
    </div>
    <ProductsList />
    </div>
   
    <Footer />
    </section>      
    </>
    )
}

export default Products
