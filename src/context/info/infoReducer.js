import ACTIONS from "../actionsType";

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_INFO:
            return [...state, action.payload]
        case ACTIONS.REMOVE_INFO:
            return state.filter(message => message.id !== action.payload);
        default:
            return { ...state }
    }
}