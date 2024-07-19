import React from "react";
import logo from "../assets/images/Logo .svg"

const Footer = () => {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo}></img>
                    <p>We are family owned Mediterranean restaurant, focused on traditional 
                        recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123, Wall Street, USA</li>
                        <li>Phone : <br/>++ 123 4567 890 </li>
                        <li>Email: <br/>littlelemon@food.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">YouTube</a></li>
                </div>
            </section>
        </footer>
    )
}

export default Footer;