export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}


export const decrementItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id)
    }

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            )
    }
    return [...cartItems, { ...cartItemToRemove, quantity: 1}]
}


export const clearItemFromCart = (cartItems, item) => 
   cartItems.filter(cartItem => cartItem.id !== item.id);


export const getCartItemsCount = (cartItems) => cartItems.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0
);


// export const subtotalItems = cartItems => {
//     let total = 0;
//     cartItems.forEach(product => {
//     total = product.quantity * product.unit_price
//     return total;
//     })
//   }

// export const subtotalItems = cartItems => {
// let total = 0
//   cartItems.forEach(product => {
//       total = product.quantity * product.unit_price
//       return total;
//   });
//   }

export const subtotalItems = cartItems => {
   cartItems.map(cartItem => (
     cartItem.quantity * cartItem.unit_price
   ))
}

export const getCartTotal = cartItems =>
  cartItems.reduce(
    (totalQuantity, cartItem) =>
      totalQuantity + cartItem.quantity * cartItem.price, 0
    );
  

