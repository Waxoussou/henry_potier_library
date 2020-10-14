import React, { useContext, Fragment, useEffect, useState } from 'react';
import { Form, Modal, Button, Accordion } from 'react-bootstrap';
import CartTable from './CartTable';
import CartContext from '../context/cart/cartContext';

const CartModal = () => {
    const cartState = useContext(CartContext);
    const { cart, isOpen, handleCartModal,
        addBookToCart, deleteFromCart, total_items, total_price,
        getCommercialOffers, best_offer, checkOut } = cartState;

    useEffect(() => {
        getCommercialOffers();
        // eslint-disable-next-line
    }, [cart])

    const [checkout, setCheckout] = useState(false)
    const handleFinalCheckout = () => {
        setCheckout(false);
        checkOut()
    }

    return (
        <>
            <Modal size={'xl'} show={isOpen} onHide={handleCartModal} animation={false}> {/* animation false to avoid findDOMNode Warning - [TODO: implement useRef] */}
                <Modal.Header closeButton>
                    <Modal.Title>Your Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {!total_items ?
                        <Fragment >
                            {/* IF NO ITEM YET , SHOW A MESSAGE INSTEAD */}
                            <p>NO PRODUCT IN CART YET</p>
                            <p>go to library and choose you first book</p>
                        </Fragment> :
                        <CartTable cart={cart}
                            addBookToCart={addBookToCart}
                            deleteFromCart={deleteFromCart}
                            total_items={total_items}
                            total_price={total_price}
                            best_offer={best_offer} />
                    }
                    {/* {checkout && <p>are you sure ?</p>} */}
                </Modal.Body>
                <Modal.Footer>
                    <Accordion style={{ width: '100%' }}>
                        <Accordion.Collapse eventKey="0">
                            <Form>
                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId='address'>
                                    <Form.Label>Shipping Address</Form.Label>
                                    <Form.Control type="text" placeholder="street" />
                                    <Form.Control type="text" placeholder="city" />
                                    <Form.Control type="text" placeholder="country" />
                                </Form.Group>
                            </Form>
                        </Accordion.Collapse>

                        <Button variant="secondary" onClick={handleCartModal}>Close</Button>
                        {!checkout ?
                            <Accordion.Toggle as={Button} variant="warning" eventKey="0" onClick={() => { setCheckout(true) }}>
                                Click me!</Accordion.Toggle> :
                            <Button disabled={!total_items ? true : false} variant="primary" onClick={handleFinalCheckout}>
                                Checkout</Button>}
                    </Accordion>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default CartModal;