import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo Banda" />
            </Link>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">
                    &#9776;
                </label>

                <div className="menu">
                    <>
                        <Link to="/">Inicio</Link>
                        <Link to="/">Conciertos</Link>
                    </>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
