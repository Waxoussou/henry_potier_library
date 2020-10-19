import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../../context/cart/cartContext';

// BOOK CARD COMPONENT
const Book = ({ book }) => {
    const cartState = useContext(CartContext);
    const { addBookToCart } = cartState;
    const handleClick = e => {
        e.preventDefault();
        addBookToCart(book);
    }
    return <div className='book-card'>
        <Link style={{ textDecoration: 'none', color: '#343A40' }} to={`/book/${book.isbn}`}>
            <Card style={{ display: 'flex', flexDirection: "row", overflow: 'hidden' }} >
                <Card.Img style={{ backgroundSize: 'contains', width: 120, height: '100%', minHeight: 200, margin: '10' }} variant="top" src={book.cover} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.price} €</Card.Text>
                    <Button style={{ marginTop: 'auto' }} onClick={handleClick} variant="outline-info">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Link>
    </div >
}

export default Book;