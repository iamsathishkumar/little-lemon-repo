import React from "react";
import {Link} from 'react-router-dom';
import Food from "../assets/images/restauranfood.jpg";

const Header = () => {
    return (
        <header className="header">
            <section>

                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are family owned Mediterranean
                       restaurant, focused on traditional
                       recipes served with a modern twist.</p>
                    <Link to = "/booking"><button aria-label="On Click">Reserve a Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={Food} alt="banner_image"></img>
                </div>
            </section>
        </header>
    )
}

export default Header;