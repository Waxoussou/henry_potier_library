import ACTIONS from '../actionsType';

export default (state, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_BOOKS:
            return {
                ...state,
                books: [...action.payload],
                loading: false
            }
        case ACTIONS.FILTER_BOOKS:
            return {
                ...state,
                filtered_book_list: state.books.filter(({ title }) => title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default:
            return state
    }
}