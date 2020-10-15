import React, { Fragment, useState } from 'react';
import { Container, Form, Col, Button, Row, Table, Image } from 'react-bootstrap';

const CheckoutTable = ({ item, index }) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(true)

    return <Fragment>
        <tr key={index + item.isbn}>
            <td>
                <Image style={{ height: 90, width: 70 }} src={item.cover} rounded />
            </td>
            <td>
                <Row as={'p'} style={{ fontSize: 18, fontWeight: 700, color: '#242F3E' }}>{item.title}</Row>
                <Row as={'p'}> {!toggle ?
                    <Button variant='outline-secondary' onClick={handleClick}> quantity : <span>{item.quantity}</span></Button> :
                    <Row as={Form}>
                        <Col xs={5}>
                            <Form.Control size="sm" />
                        </Col>
                        <Col>
                            <Button size="sm" variant='warning'>update</Button>
                        </Col>
                    </Row>}
                </Row>
            </td>
            {/* <td style={{ fontWeight: 700 }}>EUR {item.price}</td> */}
            <Row as={'td'} style={{ marginRight: 5, justifyContent: 'flex-end', fontWeight: 700 }}>EUR {item.price}</Row>
        </tr>
    </Fragment>
}

export default CheckoutTable;