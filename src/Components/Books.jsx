import React, { useState, useEffect } from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import Book from './Book';

const Books = () => {
    const db = "http://henri-potier.xebia.fr/books";
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState([])

    const fetchData = async db => {
        try {
            const res = await fetch(db);
            const json = await res.json()
            console.log("JSON FROM FETCH DATA=", json)
            setBooks(json);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const filterByTitle = (array_data, word) => {
        const new_book_list = array_data.filter(({ title }) => title.toLowerCase().includes(word.toLowerCase()));
        setFilteredList(new_book_list);
    }

    useEffect(() => {
        if (search) {
            filterByTitle(books, search)
        } else {
            fetchData(db);
        }
    }, [search])

    const handleChange = e => setSearch(e.target.value)

    return (
        <div className="book-list">
            <Navbar sticky={"top"} bg="dark" variant="dark">
                <Form inline >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={handleChange} />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar >
            <br />
            <Container>
                <Row>
                    {isLoading ?
                        <Spinner animation="grow" /> :
                        <Container>
                            {!search ?
                                <Row>
                                    {books.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                            {search && filteredList && filteredList.length ?
                                <Row>
                                    {filteredList.map(book => <Col key={book.isbn} xs={12} sm={6} lg={4} xl={3}> <Book book={book} /></Col>)}
                                </Row> : null}
                        </Container>
                    }
                </Row>

            </Container>

        </div>
    );
}

export default Books;