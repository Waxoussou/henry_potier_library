import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../../context/cart/cartContext';

const Book = ({ book }) => {
    const cartState = useContext(CartContext);
    const { addBookToCart } = cartState;

    return <div className='book-card'>
        <Card style={{ display: 'flex', flexDirection: "row", overflow: 'hidden' }} >
            <Link style={{ textDecoration: 'none' }} to={`/book/${book.isbn}`}>
                <Card.Img style={{ backgroundSize: 'contains', width: 120, height: '100%', minHeight: 200, margin: '10' }} variant="top" src={book.cover} />
            </Link>
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.price} €</Card.Text>
                <Button style={{ marginTop: 'auto' }} onClick={() => addBookToCart(book)} variant="outline-info">Add to Cart</Button>
            </Card.Body>
        </Card>
    </div >
}

export default Book;