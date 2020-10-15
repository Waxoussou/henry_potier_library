import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const cartContext = useContext(CartContext);
    const { total_items } = cartContext;
    return (
        <Route
            {...rest}
            render={props =>
                !total_items ? (
                    <Redirect to='/' />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
};

export default ProtectedRoute;
