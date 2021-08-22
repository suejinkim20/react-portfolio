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
                        <p>Full Stack Web Developer (MERN Stack) with a background in classroom teaching.  Recognized for strong work ethic and relationship-building skills with colleagues and students. Dedicated, creative, self-reflective problem solver. Passionate about designing and writing clean, user-friendly, and efficient web applications. Constructive collaborator committed to finding and communicating solutions. Perpetual learner and improver. Graduate of UNC- Chapel Hill Coding Bootcamp with an A+ average. 
</p>
                    </article>

                </div>
                <div className="contact-me col-lg-4 col-sm-12 text-center">
                    <p>
                        <Linkedin />
                        <a href="https://www.linkedin.com/in/suejinkim" className="contact-links"> LinkedIn</a>
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
                        <a href="https://bit.ly/sjk_resume" className="contact-links"> Resume</a>
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