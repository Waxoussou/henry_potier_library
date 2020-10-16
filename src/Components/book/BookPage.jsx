import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Nav from '../layout/Nav';
import BookContext from '../../context/book/bookContext';

const BookPage = ({ match, location }) => {
    const { books } = useContext(BookContext);
    const [current, setCurrent] = useState({});

    // SET CURRENT BOOK FROM FILTERING BOOKS (state) with ROUTER PARAMS (isbn) 
    useEffect(() => {
        const { params: { isbn } } = match
        const current_book = books.filter(book => isbn === book.isbn)
        setCurrent(current_book[0]);
        //eslint-disable-next-line
    }, [])

    return <>
        <Nav />
        {current && <>
            <Card>
                <Card.Header>{current.title}</Card.Header>
                <Card.Body>
                    <Card.Title>synopsis </Card.Title>
                    <Card.Text>
                        {current.synopsis}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
        }
    </>
}
export default BookPage;