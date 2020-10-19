import React, { useContext, useEffect } from 'react';
import { Container, Accordion, Card, Jumbotron } from 'react-bootstrap';
import CheckoutTable from './checkout/CheckoutTable';
import CheckoutForm from './checkout/CheckoutForm';

import CartContext from '../context/cart/cartContext';

const Checkout = () => {
    // IMPORT CONTEXT 
    const cartState = useContext(CartContext);
    const { cart, deleteFromCart, addBookToCart, total_items, total_price, best_offer, getCommercialOffers, checkOut } = cartState;

    useEffect(() => {
        getCommercialOffers();
        // eslint-disable-next-line
    }, [cart])

    return <>
        <br />
        <Container >
            <Accordion defaultActiveKey="0">
                <Card bg={'info'}>
                    <Accordion.Toggle style={{ color: "white", fontWeight: 700 }} as={Card.Header} eventKey="0">
                        Shopping Cart</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ background: 'white' }}>
                            <CheckoutTable cart={cart} total_items={total_items} best_offer={best_offer}
                                deleteFromCart={deleteFromCart} addBookToCart={addBookToCart} total_price={total_price} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg={'info'}>
                    <Accordion.Toggle as={Card.Header} style={{ color: "white", fontWeight: 700 }} eventKey="1">
                        Checkout</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body style={{ background: 'white' }}>
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