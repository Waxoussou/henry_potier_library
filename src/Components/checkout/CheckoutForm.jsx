import React, { useContext } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import InfoContext from '../../context/info/infoContext';

const CheckoutForm = ({ checkOut }) => {
    const { setInfo } = useContext(InfoContext);
    const handleSubmit = e => {
        e.preventDefault();
        const message = 'your order will be sent to you shortly. Please do not forget to let your window open in order to let our delivery owl do their job!';
        const type = 'success';
        setInfo(message, type)
        setTimeout(() => {
            checkOut();
        }, 2500)
    }
    return <Form onSubmit={handleSubmit}>
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
        <Form.Row>
            <Button style={{ justifyContent: 'flex-end' }} variant="primary" type="submit">Proceed to Checkout</Button>
        </Form.Row>
    </Form>
}

export default CheckoutForm;