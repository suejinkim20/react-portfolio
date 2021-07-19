import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ContactForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [userMessage, setUserMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
        setFirstName(inputValue);
        } else if (inputType === 'lastName') {
        setLastName(inputValue);
        } else if (inputType === 'email') {
        setEmail(inputValue);
        } else {
        setUserMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
          setErrorMessage('Please Enter a Valid Email');
          return;
        }
        if(!userMessage){
            setErrorMessage('Please Enter a Message')
            return
        }
        
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setFirstName('');
        setLastName('');
        setEmail('');
        setUserMessage('')
    }
    return ( 
        <div>
            <Form className="form">
                <Row className="my-3">
                <Form.Label>Name</Form.Label>
                    <Col className="col-6">
                        <Form.Control
                        value={firstName}
                        name="firstName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="First name"
                        />
                    </Col>
                    <Col className="col-6">
                        <Form.Control
                        value={lastName}
                        name="lastName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Last name"
                        />
                    </Col>
                </Row>
                <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="name@example.com"
                    />
                </Form.Group>
                <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={userMessage}
                        name="userMessage"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter Message Here"
                    />
                </Form.Group>
                <Button variant="info" type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </Form>
            {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
     );
}
 