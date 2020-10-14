import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import CartContext from '../context/cart/cartContext';

const Book = ({ book }) => {
    const cartState = useContext(CartContext);
    const { addBookToCart } = cartState;

    return <div className='book-card'>
        <Card style={{  display: 'flex', flexDirection: 'column', overflow:'hidden' }} >
            <Card.Img style={{ backgroundSize: 'cover', width: '70%', margin: '10px auto' }} variant="top" src={book.cover} />
            <Card.Body>
                <Card.Title style={{ height: 50 }}>{book.title}</Card.Title>
                <Card.Text style={{ height: 76, overflow:'hidden' }}>
                    {book.synopsis[0].slice(0, 160)} ...
                    </Card.Text>
                <Button style={{ margin: 'auto' }} onClick={() => addBookToCart(book)} variant="info">Add to Cart</Button>
            </Card.Body>
        </Card>
    </div >

}

export default Book;