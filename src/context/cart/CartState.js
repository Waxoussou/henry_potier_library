import React, { useReducer } from "react";
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import ACTIONS from '../actionsType';


const CartState = props => {
    const initialState = {
        cart: [],
    }

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addBookToCart = (book) => {
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: book })
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