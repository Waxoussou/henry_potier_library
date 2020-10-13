import React, { useState, useEffect, useContext } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Navbar, Form, FormControl, InputGroup } from 'react-bootstrap';
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
            <Navbar style={{ justifyContent: 'space-between' }} sticky={"top"} bg="dark" variant="dark">
                <Form inline >
                    <InputGroup className="mb-2 mr-sm-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={handleChange} />
                    </InputGroup>
                </Form>

                <Navbar.Brand >
                    <Cart />
                </Navbar.Brand>
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