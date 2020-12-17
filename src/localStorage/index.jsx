
export const getCartData = (key) => {
    return JSON.parse(localStorage.getItem(key))
};

export const setCartData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
};

export const addToItem = (item, key, el) => {
    if(item.length !== 0){
        item.splice(0, 1);
        item.push(el)
        return item
    }
    item.push(el)
    return item
}

export const addToYourCart = (cartData, key, el) => {
    for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id === el._id) {
            return addToCartData(cartData, key, el)
        }
    }
    return cartData
}

export const addToCartData = (cartData, key, el) => {
    const item = {
        ...el,
        id: el._id,
        countBasket: 1,
        priceAll: el.price,
        weightAll: el.weight
    }
    const index = cartData.some((cartItem) => cartItem._id === item.id)
    if(index){
        cartData.some((cartItem) => {
            if(cartItem._id === item.id){
                cartItem.countBasket++
                cartItem.priceAll = cartItem.price * cartItem.countBasket
                cartItem.weightAll = cartItem.weight * cartItem.countBasket
            }
        } )
    } else {
        cartData.push(item);
    }
    return cartData
}


export const deleteToCartData = (cartData, key, id) => {
    cartData = cartData.map((el) => el._id === id ? ({
        ...el,
        countBasket: el.countBasket - 1,
        priceAll: el.price * (el.countBasket - 1),
        weightAll: el.weight * (el.countBasket - 1)

    }) : el)

    cartData = cartData.filter((el)=>el.countBasket)
    return cartData
}

export const deleteToBasketYourSetAll = (cartData, key, id) => {
    cartData = cartData.filter(item => item._id !== id)
    return cartData
}