import ACTIONS from '../actionsType';

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}