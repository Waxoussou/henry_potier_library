import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../context/cart/cartContext';

const Book = ({ book }) => {
    const cartState = useContext(CartContext);
    const { addBookToCart } = cartState;

    return <div className='book-card'>
        <Card style={{ overflow: 'hidden' }} >
            <Card.Img variant="top" src={book.cover}  />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text style={{ height: 80 }}>
                    {book.synopsis[0].slice(0, 110)} ...
                    </Card.Text>
                <Button onClick={() => addBookToCart(book)} variant="primary">Add To Shopping Cart</Button>
            </Card.Body>
        </Card>
    </div >

}

export default Book;