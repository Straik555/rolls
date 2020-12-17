import React, { createContext, useReducer } from 'react'

import {
    addToCartData,
    deleteToCartData,
    getCartData,
    setCartData,
    deleteToBasketYourSetAll,
    addToItem,
    addToYourCart
} from "../localStorage";

const initialState = getCartData('basketRolls24') || {
    yourSet: {
        basketYourSet: [],
    },
    cart: {
        basket:  [],
    },
    blog: {
        yourBlog: [],
    },
    product: [],
    bonus: 0
}
const storeContext = createContext(initialState)
const { Provider } = storeContext

const ACTIONS = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    ADD_TO_BASKET_YOUR_SET: 'ADD_TO_BASKET_YOUR_SET',
    REMOVE_TO_BASKET: 'REMOVE_TO_BASKET',
    REMOVE_TO_BASKET_YOUR_SET: 'REMOVE_TO_BASKET_YOUR_SET',
    DELETE_TO_BASKET_YOUR_SET_ALL: 'DELETE_TO_BASKET_YOUR_SET_ALL',
    ADD_TO_BLOG: 'ADD_TO_BLOG',
    ADD_TO_PRODUCT: 'ADD_TO_PRODUCT',

    //for bonuses
    SET_BONUS_AMOUNT: 'SET_BONUS_AMOUNT'
}

const reducer = (state, action) => {
    const k = () => {switch (action.type) {
        case ACTIONS.ADD_TO_BASKET: {
            return {
                ...state,
                cart: {
                    basket: addToCartData(state.cart.basket, 'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: addToYourCart(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.ADD_TO_BASKET_YOUR_SET: {
            return {
                ...state,
                cart: {
                    basket: addToCartData(state.cart.basket, 'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: addToCartData(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.REMOVE_TO_BASKET:
            return {
                ...state,
                cart: {
                    basket: deleteToCartData(state.cart.basket,'basketRolls24', action.payload)
                }
            }
        case ACTIONS.REMOVE_TO_BASKET_YOUR_SET: {
            return {
                ...state,
                cart: {
                    basket: deleteToCartData(state.cart.basket,'basketRolls24', action.payload)
                },
                yourSet: {
                    basketYourSet: deleteToCartData(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.DELETE_TO_BASKET_YOUR_SET_ALL: {
            return {
                ...state,
                yourSet: {
                    basketYourSet: deleteToBasketYourSetAll(state.yourSet.basketYourSet, 'basketRolls24', action.payload)
                },
                cart: {
                    basket: deleteToBasketYourSetAll(state.cart.basket,'basketRolls24', action.payload)
                }
            }
        }
        case ACTIONS.ADD_TO_BLOG:
            return {
                ...state,
                blog:{
                    yourBlog: addToItem(state.blog.yourBlog, 'basketRolls24', action.payload)
                }
            }
        case ACTIONS.ADD_TO_PRODUCT:
            return {
                ...state,
                product: addToItem(state.product, 'basketRolls24', action.payload)
            }
        case ACTIONS.SET_BONUS_AMOUNT:
            return {
                ...state,
                bonus: action.bonus
            }
        default:
            throw new Error()
    }}

    const newStore = k();

    setCartData('basketRolls24', newStore);

    return newStore;
}

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export { storeContext, StateProvider, ACTIONS }
