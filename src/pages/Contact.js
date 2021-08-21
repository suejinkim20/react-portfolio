import React from 'react'
import { Github, FileEarmarkText, EnvelopeOpen, Linkedin, Stack } from 'react-bootstrap-icons'
import Row from 'react-bootstrap/Row'
import ContactForm from '../components/ContactForm'
// import Link from 'react-bootstrap/Link'

export default function Contact() {

    return(
        <div className="mt-5 mx-5 mb-3">
            {/* <h2>Contact</h2> */}
            <Row>
                <div className="col-lg-8 col-sm-12">
                    <br></br>
                    <h2>Hi, there!</h2>
                    <p>Let's get in touch.</p>
                    <p>Note: this form is not yet fully functional. Please email me directly at kim.suejin.20@gmail.com with any questions or inquiries.</p>
                    <ContactForm />
                    {/* <Link href="mailto:kim.suejin.20@gmail.com"></Link> */}
                    <br></br>
                </div>

                <div className="col-lg-4 col-sm-12 contact-me text-center d-flex flex-column align-items-center">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <h3>Contact Info</h3>
                    <p>
                        <Linkedin />
                        <a href="https://www.linkedin.com/in/suejin-kim-aa60571bb" className="contact-links"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </p>
                    <p>
                        <Github />
                        <a href="https://github.com/suejinkim20" className="contact-links"><i class="fab fa-github-square"></i> GitHub</a>
                    </p>
                    <p>
                        <Stack />
                        <a href="https://stackexchange.com/users/22248515/suejin-kim" className="contact-links"><i class="fab fa-github-square"></i> Stack Exchange</a>
                    </p>
                    <p>
                        < FileEarmarkText />
                        <a href="https://bit.ly/sjk_resume" className="contact-links"> <i class="fas fa-file"></i> Resume</a>
                    </p>
                    <p>
                        < EnvelopeOpen />
                        <a href="mailto:kim.suejin.20@gmail.com" className="contact-links"><i class="fas fa-envelope-square"></i> Email</a> 
                    </p>

                </div>
            </Row>
        </div>
    )
}