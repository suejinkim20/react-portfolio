import React from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

export default function About() {
    return (
        <Container className="about-me mt-5 text-center" id="about-me">
            <article className="about-me-photo m-3 mt-4">
                    <Image src="./src/images/suejinkim-photo.jpg" width="150px" roundedCircle/>
                </article>  
                <h1>Sue Jin Kim</h1>
                <p className="subheader">{"<"}aspiring{">"} full stack web developer</p>
                <p>MongoDb/Mongoose, ExpressJs, ReactJs, NodeJs</p>
                <hr />
            <Row className='mb-5'>
                <div className="about-me-section col-8">
                    <article className="about-me-text">
                        <h2>About Me</h2>
                        <p>Full Stack Web Development Student at UNC-CH Coding Bootcamp. Dedicated, creative, self-reflective problem solver. Passionate about improving user experiences on the web. Constructive collaborator committed to finding and communicating solutions.</p>
                    </article>

                </div>
                <article className="contact-me col-4">
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
        </Container>
    )
}