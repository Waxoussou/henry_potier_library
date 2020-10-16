import React, { useContext, useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import InfoContext from '../../context/info/infoContext';

const CheckoutForm = ({ checkOut }) => {
    const { setInfo } = useContext(InfoContext);
    // Local State (::Form)
    const [isFormComplete, setFormComplete] = useState(false)
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: ''
    })
    const handleChange = ({ target: { value, id: key } }) => setState({ ...state, [key]: value })

    useEffect(() => {
        const allInputsAreComplete = Object.keys(state).every(key => state[key] !== '')
        allInputsAreComplete ?
            setFormComplete(true) :
            setFormComplete(false)
        // eslint-disable-next-line
    }, [state])

    const handleSubmit = e => {
        e.preventDefault();
        const message = 'your order will be sent to you shortly. Please do not forget to let your window open in order to let our delivery owl do their job!';
        const type = 'success';
        setInfo(message, type) //send info to the user
        setTimeout(() => {
            checkOut(); // empty cartState and redirect on '/'
        }, 1500)
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} xs={3} controlId='gender'>
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." onChange={handleChange} >
                    <option>Choose...</option>
                    <option>M </option>
                    <option>Mme </option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="firstname" onChange={handleChange}>
                <Form.Label>Firsname</Form.Label>
                <Form.Control type="text" placeholder="firstname" />
            </Form.Group>

            <Form.Group as={Col} controlId="lastname" onChange={handleChange}>
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Lastname" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="email" onChange={handleChange}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="address" onChange={handleChange}>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="address2" onChange={handleChange}>
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Form.Row>
            <Form.Group as={Col} xs={7} controlId="city" onChange={handleChange}>
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" />
            </Form.Group>
            <Form.Group as={Col} controlId="zip" onChange={handleChange}>
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Zip" />
            </Form.Group>
            <Form.Group as={Col} controlId="country" onChange={handleChange}>
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder="Country" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Button disabled={isFormComplete ? false : true} style={{ justifyContent: 'flex-end' }} variant="primary" type="submit">Proceed to Checkout</Button>
        </Form.Row>
    </Form>
}

export default CheckoutForm;