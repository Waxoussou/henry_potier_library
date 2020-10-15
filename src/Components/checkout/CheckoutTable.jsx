import React, { Fragment, useState } from 'react';
import { Container, Form, Col, Button, ButtonGroup, Row, Table, Image, } from 'react-bootstrap';

const TRASHIcon = () => {
    return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
}

const CheckoutTable = ({ item, total_items, deleteFromCart, addBookToCart }) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(true)

    return <Fragment>
        <tr>
            <td>
                <Image style={{ height: 90, width: 70 }} src={item.cover} rounded />
            </td>
            <td>
                <Row as={'p'} style={{ fontSize: 18, fontWeight: 700, color: '#242F3E' }}>{item.title}</Row>
                <Row as={'div'}>
                    <Col xs={10} sm={4} >
                        <ButtonGroup style={{ border: '1px solid #6D757D', borderRadius: 5 }} size="sm" >
                            <Button onClick={() => deleteFromCart(item)} variant='secondary' size='sm'>{total_items > 1 ? ' - ' : <TRASHIcon />}</Button>
                            <Button style={{ margin: '0 5px' }} variant='light' disabled> {item.quantity}</Button>
                            <Button onClick={() => addBookToCart(item)} variant='secondary' size='sm'>+</Button>
                        </ButtonGroup >
                    </Col>
                    <Col xs={4} sm={2}>
                        <Button variant='link' size='sm' >Delete</Button>
                    </Col>
                </Row>
            </td>
            {/* <td style={{ fontWeight: 700 }}>EUR {item.price}</td> */}
            <Row as={'td'} style={{ marginRight: 5, justifyContent: 'flex-end', fontWeight: 700 }}>EUR {item.price}</Row>
        </tr>
    </Fragment >
}

export default CheckoutTable;