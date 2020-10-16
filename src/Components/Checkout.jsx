import React, { useContext, useEffect } from 'react';
import { Container, Accordion, Card, Jumbotron } from 'react-bootstrap';
import Nav from './layout/Nav';
import CheckoutTable from './checkout/CheckoutTable';
import CheckoutForm from './checkout/CheckoutForm';

import CartContext from '../context/cart/cartContext';

const Checkout = () => {
    // IMPORT CONTEXT 
    const { cart, deleteFromCart, addBookToCart, total_items, total_price,
        best_offer, getCommercialOffers, checkOut } = useContext(CartContext);

    useEffect(() => {
        getCommercialOffers();
        // eslint-disable-next-line
    }, [cart])

    return <>
        <Nav />
        <br />
        <Container >
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Shopping Cart</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <CheckoutTable cart={cart} total_items={total_items} best_offer={best_offer}
                                deleteFromCart={deleteFromCart} addBookToCart={addBookToCart} total_price={total_price} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">Checkout!</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Jumbotron>
                                <p>No cash needed, it's magic ! Just send us our address details, we'll send a delivery owl within an hour !</p>
                                <small className='text-muted' >Tom, Your librarian</small>
                            </Jumbotron>
                            <CheckoutForm checkOut={checkOut} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container >
    </>

}

export default Checkout;