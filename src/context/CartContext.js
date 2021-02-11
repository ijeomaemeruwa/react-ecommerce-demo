import React, {useState, useEffect, createContext} from 'react';
// import {PRODUCTS} from '../../src/data/products';
import { 
  addItemToCart, 
  removeItemFromCart, 
  getCartItemsCount, 
  clearItemFromCart,
  subtotalItems,
  getCartTotal
   } from './utils';


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const addProduct = (item) => {
    setCartItems(addItemToCart(cartItems, item))
  }

  const removeProduct = (item) => {
    setCartItems(removeItemFromCart(cartItems, item))
  }

  const clearProduct = (item) => {
    setCartItems(clearItemFromCart(cartItems, item));
  }

  // const getCartTotal = (item) => {
  //    setSubTotal(cartItems)
  // }


useEffect(() => {
  setCartItemsCount(getCartItemsCount(cartItems));
  setCartTotal(getCartTotal(cartItems));
  setSubTotal(subtotalItems(cartItems));
}, [cartItems])


return (
<>
<CartContext.Provider value={{
  addProduct, 
  removeProduct,
  clearProduct,
  subTotal, 
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
