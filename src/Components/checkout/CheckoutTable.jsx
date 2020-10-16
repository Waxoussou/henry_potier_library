import React, { Fragment } from 'react';
import { Col, Button, ButtonGroup, Row, Image, Table } from 'react-bootstrap';

const TrashIcon = () => {
    return <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>
}

const UpdateQuantity = ({ item, total_items, total_price, best_offer, deleteFromCart, addBookToCart }) => {
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
                            <Button onClick={() => deleteFromCart(item)} variant='secondary' size='sm'>{total_items > 1 ? ' - ' : <TrashIcon />}</Button>
                            <Button style={{ margin: '0 5px' }} variant='light' disabled> {item.quantity}</Button>
                            <Button onClick={() => addBookToCart(item)} variant='secondary' size='sm'>+</Button>
                        </ButtonGroup >
                    </Col>
                    <Col xs={4} sm={2}>
                        <Button variant='link' size='sm' >Delete</Button>
                    </Col>
                </Row>
            </td>
            <Row as={'td'} style={{ marginRight: 5, justifyContent: 'flex-end', fontWeight: 700 }}>EUR {item.price}</Row>
        </tr>
    </Fragment >
}

const CheckoutTable = ({ cart, total_items, total_price, best_offer, deleteFromCart, addBookToCart }) => {
    return <Table borderless hover>
        <thead style={{ borderBottom: "1px solid #6D757D" }}>
            <tr>
                <th colSpan={2}></th>
                <Row as={'th'} style={{ fontSize: 14, justifyContent: 'flex-end' }}>price</Row>
            </tr>
        </thead>
        <tbody>
            {cart.map((item, index) => {
                return <UpdateQuantity key={item.isbn + index} item={item} total_items={total_items}
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
}


export default CheckoutTable;