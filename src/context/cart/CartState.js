import React, { useReducer } from "react";
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import ACTIONS from '../actionsType';


const CartState = props => {
    const initialState = {
        cart: [],
        total_price: 0
    }

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addBookToCart = (book) => {
        const isInCart = state.cart.some(item => item.isbn === book.isbn);
        if (!isInCart) {
            dispatch({ type: ACTIONS.ADD_TO_CART, payload: book })
        } else {
            dispatch({ type: ACTIONS.INCREMENT_QUANTITY, payload: book.isbn })
            updateTotalPrice();
        }
    }

    const updateTotalPrice = () => {
        dispatch({ type: ACTIONS.UPDATE_TOTAL_PRICE })
    }

    const deleteFromCart = (book) => {
        dispatch({ type: ACTIONS.DELETE_FROM_CART, payload: book })
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addBookToCart,
                deleteFromCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

}

export default CartState;