import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import BookContext from '../context/book/bookContext';
import Book from './Book';
import Cart from './Cart';

const Books = () => {
    const bookState = useContext(BookContext);
    const { books, filtered_book_list, loadBooks, filterBooks, loading } = bookState;
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!books.length) loadBooks();
        if (search) filterBooks(search);
        // eslint-disable-next-line
    }, [search])

    const handleChange = e => setSearch(e.target.value)

    return (
        <div className="book-list">
            <Navbar sticky={"top"} bg="dark" variant="dark">
                <Col xs={11}>
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={handleChange} />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Col>
                <Col xs={1}>
                    <Cart />
                </Col>
            </Navbar >
            <br />
            <Container>
                <Row>
                    {loading ?
                        <Spinner animation="grow" /> :
                        <Container>
                            {!search ?
                                <Row>
                                    {books.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                            {search && filtered_book_list && filtered_book_list.length ?
                                <Row>
                                    {filtered_book_list.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                        </Container>
                    }
                </Row>

            </Container>

        </div>
    );
}

export default Books;