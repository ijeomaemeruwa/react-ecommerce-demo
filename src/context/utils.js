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


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        {...cartItems, quantity: cartItem.quantity -1}
        : cartItem
        );
}

export const clearItemFromCart = (cartItems, item) => 
   cartItems.filter(cartItem => cartItem.id !== item.id);


export const getCartItemsCount = (cartItems) => cartItems.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity, 0
);

export const subtotalItems = cartItems => {
    let total = 0;
    cartItems.forEach(product => {
    total = total + product.quantity * product.price
    });
    return total;
  }


export const getCartTotal = cartItems =>
  cartItems.reduce(
    (totalQuantity, cartItem) =>
      totalQuantity + cartItem.quantity * cartItem.price, 0
    );