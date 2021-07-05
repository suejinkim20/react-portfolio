import React from 'react';
//import '../styles/Header.css';  

function Header() {
  return (
    <header className="header">
        <article class="about-me-photo">
            <img src="./images/suejinkim-photo.jpg" width="150px" />
        </article>  
            <h1>Sue Jin Kim</h1>
            <p class="subheader">{"<"}aspiring{">"} web developer</p>
            <p>HTML, CSS, JavaScript, NodeJS, Express, MongoDB</p>
    </header>
  );
}

export default Header;
