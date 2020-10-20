import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import InfoContext from '../../context/info/infoContext';

const CartLink = () => {
    const { total_items } = useContext(CartContext);
    const { setInfo } = useContext(InfoContext);

    const handleClick = () => {
        // If button is clicked from Book page when no items are in the cart, 
        // sent a message to the InfoState in order to let the user know
        if (!total_items)
            setInfo('you must add at least one book to your card to access the checkout page', 'danger', 5000)
    }

    return <Link to='/checkout'>
        <div onClick={handleClick} className={'cart-logo'} style={{ position: 'relative' }} >
            {/* HANDLE BADGE WHEN BOOK ADD TO CART */}
            {total_items > 0 ? <Badge style={{ position: 'absolute', right: 0 }} variant='primary'>{total_items}</Badge> : null}
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart3" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
        </div>
    </Link>
}

export default CartLink;