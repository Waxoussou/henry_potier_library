import React, { useReducer } from "react";
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import ACTIONS from '../actionsType';


const CartState = props => {
    const initialState = {
        cart: [],
        total_price: 0,
        total_items: 0,
        isOpen: false
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
        const { quantity } = state.cart.filter(item => item.isbn === book.isbn)[0];
        quantity > 1 ?
            dispatch({ type: ACTIONS.DECREMENT_QUANTITY, payload: book.isbn }) :
            dispatch({ type: ACTIONS.DELETE_FROM_CART, payload: book.isbn })
        updateTotalPrice()
    }

    const handleCartModal = () => {
        dispatch({ type: ACTIONS.HANDLE_CART_MODAL })
    }

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                isOpen: state.isOpen,
                total_items: state.total_items,
                total_price: state.total_price,
                addBookToCart,
                deleteFromCart,
                handleCartModal,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

}

export default CartState;