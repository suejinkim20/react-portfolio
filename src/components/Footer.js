import React from 'react';
import { Github, EnvelopeOpen, Linkedin, Stack } from 'react-bootstrap-icons'

function Footer() {
  return (
    <footer className="footer text-center">
      {/* <p>This portfolio is a work in progress.</p> */}
      <br></br>
      <p>
        <a href="https://www.linkedin.com/in/suejin-kim-aa60571bb" className="contact-links p-3">
          <Linkedin color='white'/>
        </a>
     
        <a href="https://github.com/suejinkim20" className="contact-links p-3">
          <Github color='white'/>
        </a>
    
        <a href="mailto:kim.suejin.20@gmail.com" className="contact-links p-3">
          < EnvelopeOpen color='white'/>
        </a> 
        <a href="https://stackexchange.com/users/22248515/suejin-kim" className="contact-links p-3">
          < Stack color='white'/>
        </a>
      </p>
      <br></br>
    </footer>
  );
}

export default Footer;