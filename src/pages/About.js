import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import { Github, FileEarmarkText, EnvelopeOpen, Linkedin, Stack } from 'react-bootstrap-icons'
import suejinKim from '../images/suejinkimPhoto.jpg'


export default function About() {
    return (
        <Container className="mt-5 justify-content-center">
            <div className="m-3 mt-4 text-center">
                <Image src={suejinKim} width="150px" roundedCircle/>
                <h1>Sue Jin Kim</h1>
                <p className="subheader">MERN full stack web developer</p>
                <p>MongoDb/Mongoose, ExpressJs, ReactJs, NodeJs</p>
            </div>  
            <hr />
            <Row className='mb-5' id='about-me-container justify-content-center'>
                <div className="col-lg-7 col-sm-12">
                    <article className="about-me-text">
                        <h2>About Me</h2>
                        <p>Dedicated, creative, self-reflective problem solver. Passionate about designing and writing clean, user-friendly, and efficient web applications. Constructive collaborator committed to finding and communicating solutions.</p>
                        <p>Graduate of the UNC-CH Full Stack Web Development Boot Camp. Former educator looking to diversify my skill set and transition to web development full time.</p>
                    </article>

                </div>
                <div className="contact-me col-lg-4 col-sm-12 text-center">
                    <p>
                        <Linkedin />
                        <a href="https://www.linkedin.com/in/suejin-kim-aa60571bb" className="contact-links"> LinkedIn</a>
                    </p>
                    <p>
                        <Github />
                        <a href="https://github.com/suejinkim20" className="contact-links"> GitHub</a>
                    </p>
                    <p>
                        <Stack />
                        <a href="https://stackexchange.com/users/22248515/suejin-kim" className="contact-links"> Stack Exchange</a>
                    </p>
                    <p>
                        <FileEarmarkText />
                        <a href="https://docs.google.com/document/d/1dTTjjlqiw5mumTfnTBpw4k-b-i-I9mNS-mTOpMu8JAA/edit?usp=sharing" className="contact-links"> Resume</a>
                    </p>
                    <p>
                        <EnvelopeOpen />
                        <a href="mailto:kim.suejin.20@gmail.com" className="contact-links"> Email</a> 
                    </p>
                </div>
            </Row>
        </Container>
    )
}