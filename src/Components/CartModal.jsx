import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CartContext from '../context/cart/cartContext';

const CartModal = () => {
    const cartState = useContext(CartContext);
    const { isOpen, handleCartModal } = cartState;


    return (
        <>
            <Modal show={isOpen} onHide={handleCartModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCartModal}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleCartModal}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CartModal;