import React, { useReducer } from "react";
import BookContext from './bookContext';
import bookReducer from './bookReducer';

import ACTIONS from '../actionsType';


const BookState = props => {
    const db = "http://henri-potier.xebia.fr/books";

    const initialState = {
        books: [],
        filtered_book_list: [],
        loading: true,
        search: ''
    }
    const [state, dispatch] = useReducer(bookReducer, initialState);

    const loadBooks = async () => {
        try {
            const res = await fetch(db);
            const json = await res.json()
            dispatch({ type: ACTIONS.LOAD_BOOKS, payload: json })
        } catch (error) {
            console.log(error);
        }
    }
    const filterBooks = () => {
        dispatch({ type: ACTIONS.FILTER_BOOKS })
    }
    const setSearch = word => {
        dispatch({ type: ACTIONS.SET_SEARCH, payload: word })
    }


    return (
        <BookContext.Provider
            value={{
                books: state.books,
                filtered_book_list: state.filtered_book_list,
                loading: state.loading,
                search: state.search,
                loadBooks,
                filterBooks,
                setSearch
            }}>
            {props.children}
        </BookContext.Provider>
    );

}

export default BookState;