import React, { useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';

import BookCard from './book/BookCard';

import BookContext from '../context/book/bookContext';
import InfoContext from '../context/info/infoContext';

const Books = () => {
    // IMPORT CONTEXT
    const { books, filtered_book_list, loadBooks, filterBooks, loading, search } = useContext(BookContext);
    const { setInfo } = useContext(InfoContext);

    useEffect(() => {
        if (!books.length) loadBooks();
        if (search) filterBooks();
        // eslint-disable-next-line
    }, [search])

    useEffect(() => {
        if (search && !filtered_book_list.length)
            setInfo('no book matching you request, please try again !', 'warning', 1500)
        // eslint-disable-next-line
    }, [filtered_book_list])

    return (
        <div className="book-list">
            <br />
            <Container>
                {loading ?
                    <Spinner style={{ margin: 'auto' }} animation="grow" /> :
                    <>
                        {!search ? //user not trying to filter list => render all books 
                            < Row style={{ rowGap: 20 }}>
                                {books.map(book => <Col key={book.isbn} xs={12} md={6} lg={4}  > <BookCard book={book} /></Col>)}
                            </Row> : null}
                        {/* search is active and results are found => render filtered list of books instead */}
                        {search && filtered_book_list && filtered_book_list.length ?
                            <Row style={{ rowGap: 20 }}>
                                {filtered_book_list.map(book => <Col key={book.isbn} xs={12} md={6} lg={4} > <BookCard book={book} /></Col>)}
                            </Row> : null}
                    </>
                }
            </Container>
        </div >
    );
}

export default Books;