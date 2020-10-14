import ACTIONS from "../actionsType";

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_INFO:
            const { payload: { message, type, id } } = action;
            return { message, type, id }
        case ACTIONS.REMOVE_INFO:
            return { message: '', type: '', id: '' }
        default:
            return { ...state }
    }
}