import React, {useState, useEffect, createContext} from 'react';
import {PRODUCTS} from '../data/products';

import { 
  addItemToCart, 
  decrementItem, 
  getCartItemsCount, 
  clearItemFromCart,
  getCartTotal

  } from './utils';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  // const [subTotal, setSubTotal] = useState(0);
  const [search, setSearch] = useState('')


//ADD and INCREMENT ITEM
const addProduct = (item) => {
    setCartItems(addItemToCart(cartItems, item))
  }

//REMOVE and DECREMENT ITEM
const removeProduct = (item) => {
  setCartItems(decrementItem(cartItems, item))
}

//CLEAR ITEM FROM CART
const clearProduct = (item) => {
  setCartItems(clearItemFromCart(cartItems, item));
}

//Handle Input Change
const handleChange = (e, history) => {
  setSearch(e.target.value)
  // history.replace(`search/${search}`);
}

//Filter Search
const filtered = PRODUCTS.filter(item => {
  return item.brand.toLowerCase().includes(search.toLowerCase());
})



useEffect(() => {
  setCartItemsCount(getCartItemsCount(cartItems));
  setCartTotal(getCartTotal(cartItems));
  // setSubTotal(subtotalItems(cartItems));
}, [cartItems])


return (
<>
<CartContext.Provider value={{
  addProduct, 
  removeProduct,
  clearProduct,
  handleChange,
  search,
  filtered, 
  cartItems,
  cartItemsCount,
  cartTotal
}}>
{children}
</CartContext.Provider>        
</>
)
}


export default CartContextProvider;
