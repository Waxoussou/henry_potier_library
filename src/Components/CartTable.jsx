import React from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

const CartTable = ({ cart, deleteFromCart, addBookToCart, total_items, total_price }) => {
    return <Table responsive bordered={false} hover size="sm" >
        <thead>
            <tr>
                <th>#</th>
                <th>isbn</th>
                <th>book title</th>
                <th>price</th>
                <th>quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item, index) => {
                return <tr key={index + item.isbn}>
                    <td>{item.index}</td>
                    <td>{item.isbn}</td>
                    <td>{item.title}</td>
                    <td>{item.price} €</td>
                    <td>{item.quantity}</td>
                    <td style={{ textAlign: 'center' }}>
                        <ButtonGroup size="sm">
                            <Button onClick={() => deleteFromCart(item)} variant='warning'>-</Button>
                            <Button onClick={() => addBookToCart(item)} variant='info'>+</Button>
                        </ButtonGroup ></td>

                </tr>
            })}
        </tbody>
        <tfoot>
            <th>Total</th>
            <td colSpan={2}></td>
            <td>{total_price} €</td>
            <td>{total_items}</td>
        </tfoot>
    </Table>
}

export default CartTable;