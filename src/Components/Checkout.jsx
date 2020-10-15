import React, { useContext, useState } from 'react';
import { Container, Form, Col, Button, Row, Table, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from './Info';

import CheckoutTable from './checkout/CheckoutTable';
import CartContext from '../context/cart/cartContext';
const Checkout = () => {
    const { cart, deleteFromCart, addBookToCart, total_items, total_price, best_offer } = useContext(CartContext)
    const [toggle, setToggle] = useState(false);

    return <>
        <Navbar bg='dark' variant='dark' sticky='top'>
            <Link to='/' > <Button variant='outline-info'>GO BACK</Button>  </Link>
        </Navbar>
        <Info />
        <Container >
            <Row>
                <h2>Shopping Cart</h2>
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
                    </tfoot>
                </Table>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} xs={3}>

                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>M </option>
                                    <option>Mme </option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Firsname</Form.Label>
                                <Form.Control type="text" placeholder="firstname" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type="text" placeholder="Lastname" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} xs={7}>
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>State</Form.Label>
                                <Form.Control placeholder="State" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Zip</Form.Label>
                                <Form.Control placeholder="Zip" />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>

        </Container >
    </>

}

export default Checkout;