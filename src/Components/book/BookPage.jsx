import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import BookContext from '../../context/book/bookContext';

const BookPage = ({ match }) => {
    const { books } = useContext(BookContext);
    const [current, setCurrent] = useState({});

    // SET CURRENT BOOK FROM FILTERING BOOKS (::state) with ROUTER PARAMS (isbn) 
    useEffect(() => {
        const { params: { isbn } } = match
        const current_book = books.filter(book => isbn === book.isbn)
        setCurrent(current_book[0]);
        //eslint-disable-next-line
    }, [])

    return <>
        {current && <>
            <Card border={'light'}>
                <Card.Header><h2>{current.title}</h2></Card.Header>
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