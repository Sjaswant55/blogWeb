import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
 
    return (
        <footer>
        <div class="footer-content">
            <h3>Inside Football World</h3>
            <p>Welcome to InsideFootballWorld, your passport to an immersive exploration of the captivating realm of football. Unveiling the hidden layers of the beautiful game, we bring you compelling stories, exclusive insights, and in-depth analyses that delve into the heart and soul of football. From the thrill of iconic matches to the untold tales of legendary players, our dedicated team of writers and experts take you on an unforgettable journey, uncovering the magic and passion that fuel this global phenomenon. Join us as we celebrate the artistry, tactics, and human drama that make football the world's most beloved sport.</p>
            <ul class="socials">
                <li><a href="https://twitter.com/JASS_7781" target='_'><i class="fa fa-twitter"></i></a></li>
                <li><a href="www"><i class="fa fa-google-plus" target='_'></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCywBQ_kYxTMdqp5ijpdAMNQ" target='_'><i class="fa fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jaswant-singh-rajpurohit-6a24a8205/" target='_'><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="www">Jaswant Singh</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="www">About</a></li>
                        <li><a href="www">Contact</a></li>
                        <li><a href="www" > <Link to="/create">New Blog</Link></a></li>
                      </ul>
                    </div>
        </div>

    </footer>
    );
}

export default Footer;
