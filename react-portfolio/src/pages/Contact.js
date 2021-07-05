import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact() {
    return(
        <div className="mt-5">
            {/* <h2>Contact</h2> */}
            <Row>
                <div className="col-8">
                    <h3>Get In Touch With Me</h3>
                    <Form className="m-4">
                        <Row className="m-3">
                            <Col className="col-5 m-2">
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col className="col-5 m-2">
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Form.Group className="m-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </div>

                <article className="col-4 contact-me">
                    <h3>Contact Info</h3>
                    <p>
                        <a href="https://www.linkedin.com/in/suejin-kim-aa60571bb" className="contact-links"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </p>
                    <p>
                        <a href="https://github.com/suejinkim20" className="contact-links"><i class="fab fa-github-square"></i> GitHub</a>
                    </p>
                    <p>
                        <a href="https://docs.google.com/document/d/1dTTjjlqiw5mumTfnTBpw4k-b-i-I9mNS-mTOpMu8JAA/edit?usp=sharing" className="contact-links"> <i class="fas fa-file"></i> Resume</a>
                    </p>
                    <p>
                        <a href="kim.suejin.20@gmail.com" className="contact-links"><i class="fas fa-envelope-square"></i> Email</a> 
                    </p>

                </article>
            </Row>
        </div>
    )
}