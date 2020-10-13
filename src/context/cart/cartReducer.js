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
                total_price: state.total_price + action.payload.price
            }
        case ACTIONS.INCREMENT_QUANTITY:
            return {
                ...state,
                cart: [...state.cart.reduce((items, current_item) => current_item.isbn === action.payload ?
                    // if current item corresponding to payload (===isbn) delete  item from cart list and adding it again with quantity update
                    [...items.filter(item => item.isbn !== action.payload), { ...current_item, quantity: current_item.quantity + 1 }] :
                    // else return the all current item to the item list
                    [...items, current_item], [])],
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
        default:
            return state
    }
}