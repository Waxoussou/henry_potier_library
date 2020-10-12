import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Book = ({ book }) => {
    return <div className='book-card'>
        <Card style={{ overflow: 'hidden' }} >
            <Card.Img variant="top" src={book.cover} fluid />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text style={{ height: 80 }}>
                    {book.synopsis[0].slice(0, 110)} ...
                    </Card.Text>
                <Button variant="primary">Add To Shopping Cart</Button>
            </Card.Body>
        </Card>
    </div >

}

export default Book;