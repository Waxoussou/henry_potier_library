import React, { useContext, useEffect } from 'react';
import { Container, Accordion, Card, Col, Button, Row, Table, Navbar, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from './Info';
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
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Link to='/' > <Button variant='outline-info'>GO BACK</Button>  </Link>
        </Navbar>
        <Info />
        <Container >
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Shopping Cart</Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Table borderless hover>
                                <thead style={{ borderBottom: "1px solid #6D757D" }}>
                                    <tr>
                                        <th colSpan={2}></th>
                                        <Row as={'th'} style={{ fontSize: 14, justifyContent: 'flex-end' }}>price</Row>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => {
                                        return <CheckoutTable key={item.isbn + index} item={item} total_items={total_items}
                                            deleteFromCart={deleteFromCart} addBookToCart={addBookToCart} />
                                    })}
                                </tbody>
                                <tfoot style={{ borderTop: '1px solid #242F3E' }}>
                                    <tr>
                                        <td colSpan={2}></td>
                                        <Row as={'td'} style={{ fontWeight: 700 }} >Subtotal ({total_items} items): EUR {total_price}</Row>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}></td>
                                        <Row size={'sm'} as={'td'} style={{ fontWeight: 700 }} >Discount : EUR {(total_price - best_offer).toFixed(2)}</Row>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}></td>
                                        <Row as={'td'} >Total : EUR {best_offer.toFixed(2)}</Row>
                                    </tr>
                                </tfoot>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Checkout!
    </Accordion.Toggle>
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
            <Row>

            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                </Col>
            </Row>

        </Container >
    </>

}

export default Checkout;