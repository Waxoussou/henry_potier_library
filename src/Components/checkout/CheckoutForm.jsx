import React, { useContext, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import InfoContext from '../../context/info/infoContext';

const CheckoutForm = ({ checkOut }) => {
    const { setInfo } = useContext(InfoContext);

    // Local State (::Form)
    const [validated, setValidated] = useState(false);
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
    const handleSubmit = e => {
        e.preventDefault();
        const { currentTarget: form } = e;
        if (form.checkValidity() === false) { //if all forms required are not filled 
            setValidated(true) // send feedback to user
        } else {
            const message = 'your order will be sent to you shortly. Please do not forget to let your window open in order to let our delivery owl do their job!';
            const type = 'success';
            setInfo(message, type) //send info to the user
            setTimeout(() => {
                checkOut(); // empty cartState and redirect on '/'
            }, 1500)
        }
    }

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} xs={3} controlId='gender'>
                <Form.Label>Gender</Form.Label>
                <Form.Control required as="select" defaultValue="Choose..." onChange={handleChange} >
                    <option>Choose...</option>
                    <option>M </option>
                    <option>Mme </option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="firstname" onChange={handleChange}>
                <Form.Label>Firsname</Form.Label>
                <Form.Control required type="text" placeholder="firstname" />
                <Form.Control.Feedback type='invalid'>Please provide your firstname</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="lastname" onChange={handleChange}>
                <Form.Label>Lastname</Form.Label>
                <Form.Control required type="text" placeholder="Lastname" />
                <Form.Control.Feedback type='invalid'>Please provide your lastname</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="email" onChange={handleChange}>
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type='invalid'>Please provide a valid email</Form.Control.Feedback>
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
                <Form.Control required placeholder="City" />
            </Form.Group>
            <Form.Group as={Col} controlId="zip" onChange={handleChange}>
                <Form.Label>Zip</Form.Label>
                <Form.Control required placeholder="Zip" />
            </Form.Group>
            <Form.Group as={Col} controlId="country" onChange={handleChange}>
                <Form.Label>Country</Form.Label>
                <Form.Control required placeholder="Country" />
            </Form.Group>
        </Form.Row>
        <Form.Row className='justify-content-center'>
            <Button variant="primary" type="submit">Proceed to Checkout</Button>
        </Form.Row>
    </Form>
}

export default CheckoutForm;