import React from 'react'

export default function About() {
    return (
        <section class="about-me" id="about-me">
            <div class="about-me-section">
                <article class="about-me-text">
                    <h2>About Me</h2>
                    <p>I am currently studying to become a full-stack web developer through unc-ch's coding bootcamp. I am drawn to the challenge of problem solving and how creative or logistical ideas can be addressed by online or software programs. I want to learn to create and improve digital tools that are helpful to users.</p>
                </article>
                <article class="contact-me">
                    <h2>Contact</h2>
                    <p>
                        <a href="https://www.linkedin.com/in/suejin-kim-aa60571bb" class="contact-links"><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </p>
                    <p>
                        <a href="https://github.com/suejinkim20" class="contact-links"><i class="fab fa-github-square"></i> GitHub</a>
                    </p>
                    <p>
                        <a href="https://docs.google.com/document/d/1dTTjjlqiw5mumTfnTBpw4k-b-i-I9mNS-mTOpMu8JAA/edit?usp=sharing" class="contact-links"> <i class="fas fa-file"></i> Resume</a>
                    </p>
                    <p>
                        <a href="kim.suejin.20@gmail.com" class="contact-links"><i class="fas fa-envelope-square"></i> Email</a>
                    </p>
                </article>

            </div>
        </section>
    )
}