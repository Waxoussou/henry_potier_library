import ACTIONS from '../actionsType';

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, {
                    isbn: action.payload.isbn,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1
                }],
                total_price: state.total_price + action.payload.price,
                total_items: state.total_items + 1
            }
        case ACTIONS.INCREMENT_QUANTITY:
            return {
                ...state,
                cart: [...state.cart.reduce((items, current_item) => current_item.isbn === action.payload ?
                    // if current item corresponding to payload (===isbn) delete  item from cart list and adding it again with quantity update
                    [...items.filter(item => item.isbn !== action.payload), { ...current_item, quantity: current_item.quantity + 1 }] :
                    // else return the all current item to the item list
                    [...items, current_item], [])],
                total_items: state.total_items + 1
            }
        case ACTIONS.DECREMENT_QUANTITY:
            return {
                ...state,
                cart: [
                    // SAME AS INCREMENT BUT MINUS 1 FROM QUANTITY INSTEAD 
                    ...state.cart.reduce((items, current_item) => current_item.isbn === action.payload ?
                        [...items.filter(item => item.isbn !== action.payload), { ...current_item, quantity: current_item.quantity - 1 }] :
                        [...items, current_item], [])
                ],
                total_items: state.total_items - 1,
            }
        case ACTIONS.UPDATE_TOTAL_PRICE:
            return {
                ...state,
                total_price: state.cart.reduce((items, current_item) => items + (current_item.price * current_item.quantity), 0)
            }
        case ACTIONS.HANDLE_CART_MODAL:
            return {
                ...state,
                isOpen: !state.isOpen
            }

        case ACTIONS.DELETE_FROM_CART:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.isbn !== action.payload)],
                total_items: state.total_items - 1
            }
        case ACTIONS.UPDATE_COMMERCIAL_OFFERS:
            return {
                ...state,
                commercial_offers: action.payload
            }
        default:
            return state
    }
}