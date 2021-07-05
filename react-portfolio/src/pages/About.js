import React from 'react'

export default function About() {
    return (
        <section class="about-me" id="about-me">
            <article class="about-me-photo">
                    <img src="./images/suejinkim-photo.jpg" width="150px" />
                </article>  
                <h1>Sue Jin Kim</h1>
                <p class="subheader">{"<"}aspiring{">"} web developer</p>
                <p>HTML, CSS, JavaScript, NodeJS, Express, MongoDB</p>
            <div class="about-me-section">
                <article class="about-me-text">
                    <h2>About Me</h2>
                    <p>Full Stack Web Development Student at UNC-CH Coding Bootcamp. Dedicated, creative, self-reflective problem solver. Passionate about improving user experiences on the web. Constructive collaborator committed to finding and communicating solutions.</p>
                </article>

            </div>
        </section>
    )
}