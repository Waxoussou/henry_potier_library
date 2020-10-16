import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import BookContext from '../context/book/bookContext';
import InfoContext from '../context/info/infoContext';
import NavHead from './NavHead';
import Book from './Book';
import Info from './Info';
import CartModal from './CartModal';

const Books = () => {
    // IMPORT CONTEXT
    const { books, filtered_book_list, loadBooks, filterBooks, loading } = useContext(BookContext);
    const { setInfo } = useContext(InfoContext);

    // LOCAL STATE
    const [search, setSearch] = useState('');
    const handleChange = e => setSearch(e.target.value)

    useEffect(() => {
        if (!books.length) loadBooks();
        if (search) filterBooks(search);
        // eslint-disable-next-line
    }, [search])

    useEffect(() => {
        if (search && !filtered_book_list.length)
            setInfo('no book matching you request, please try again !', 'warning', 1500)
        // eslint-disable-next-line
    }, [filtered_book_list])

    return (
        <div className="book-list">
            <NavHead search={search} handleChange={handleChange} />
            <Info />
            <br />
            <CartModal />
            <Container>
                {loading ?
                    <Spinner style={{ margin: 'auto' }} animation="grow" /> :
                    <>
                        {!search ? //user not trying to filter list => render all books 
                            < Row style={{ rowGap: 20 }}>
                                {books.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} > <Book book={book} /></Col>)}
                            </Row> : null}
                        {/* search is active and results are found => render filtered list of books instead */}
                        {search && filtered_book_list && filtered_book_list.length ?
                            <Row style={{ rowGap: 20 }}>
                                {filtered_book_list.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} > <Book book={book} /></Col>)}
                            </Row> : null}
                    </>
                }
            </Container>
        </div >
    );
}

export default Books;