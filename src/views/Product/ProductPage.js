import React, {useState} from 'react';
import './productpage.css';
import SideNav from '../../components/SideNav/SideNav';
import SideNavMobile from '../../components/SideNav/SideNavMobile';
import ProductsList from './ProductsList/ProductsList';
import Footer from '../Footer/Footer';


const Products = ({ filtered }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
    <>
    <section >
    <div className="dashboard">
    <div>
    <SideNav />
    <SideNavMobile isOpen={isOpen} toggle={toggle} />
    </div>

    <ProductsList toggle={toggle} item={filtered} />
    </div>
    <Footer />
    </section>      
    </>
    )
}

export default Products
