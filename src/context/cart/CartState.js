import React, { useReducer } from "react";
import CartContext from './cartContext';
import cartReducer from './cartReducer';

import ACTIONS from '../actionsType';
import { SelectBestOffer } from '../../offerUtils';


const CartState = props => {
    const initialState = {
        cart: [],
        total_price: 0,
        total_items: 0,
        isOpen: false,
        commercial_offers: [],
        best_offer: null,
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

    const getCommercialOffers = async () => {
        const ISBNs = state.cart.reduce((isbns, current_item, index) => index === 0 ?
            `${current_item.isbn}` :
            `${isbns},${current_item.isbn}`, '')
        console.log(ISBNs)
        const URL = `http://henri-potier.xebia.fr/books/{${ISBNs}}/commercialOffers`
        try {
            const res = await fetch(URL);
            const json = await res.json();
            const new_price = SelectBestOffer(state.total_price, json);
            dispatch({ type: ACTIONS.UPDATE_COMMERCIAL_OFFERS, payload: { commercial_offers: json, best_offer: new_price } });
        } catch (error) {
            console.error(error.message)
        }
    }

    const checkOut = () => {
        dispatch({ type: ACTIONS.CHECKOUT })
    }



    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                isOpen: state.isOpen,
                total_items: state.total_items,
                total_price: state.total_price,
                best_offer: state.best_offer,
                addBookToCart,
                deleteFromCart,
                handleCartModal,
                getCommercialOffers,
                checkOut
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

}

export default CartState;