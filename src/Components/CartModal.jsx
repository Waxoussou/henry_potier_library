import React, { useContext, Fragment, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartTable from './CartTable';
import CartContext from '../context/cart/cartContext';

const CartModal = () => {
    const cartState = useContext(CartContext);
    const { cart, isOpen, handleCartModal, addBookToCart, deleteFromCart,
        total_items, total_price, getCommercialOffers, best_offer, checkOut } = cartState;

    useEffect(() => {
        getCommercialOffers();
        // eslint-disable-next-line
    }, [cart])

    return (
        <>
            <Modal size={'xl'} show={isOpen} onHide={handleCartModal} animation={false}> {/* animation false to avoid findDOMNode Warning - [TODO: implement useRef] */}
                <Modal.Header closeButton>
                    <Modal.Title>Your Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {!total_items ? <Fragment >
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCartModal}>
                        Close
            </Button>
                    <Button disabled={!total_items ? true : false} variant="primary" onClick={checkOut}>
                        Checkout
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;