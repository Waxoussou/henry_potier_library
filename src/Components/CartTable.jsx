import React from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

const CartTable = ({ cart, deleteFromCart, addBookToCart, total_items, total_price, best_offer }) => {
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
                    <td>{index + 1}</td>
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
            <tr>
                <th>Total</th>
                <td colSpan={2}></td>
                <td>{total_price} €</td>
                <td>{total_items} books</td>
            </tr>
            <tr>
                <th>Discount</th>
                <td colSpan={2}></td>
                <td colSpan={2}> {(best_offer - total_price).toFixed(2)}€</td>
            </tr>
            <tr>
                <th>Final Price</th>
                <td colSpan={2}></td>
                <td colSpan={2}> {best_offer.toFixed(2)}€</td>
            </tr>
        </tfoot>
    </Table>
}

export default CartTable;