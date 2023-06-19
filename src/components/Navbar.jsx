import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo Banda" />
            </Link>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">
                    &#9776;
                </label>

                <div className="menu">
                    <>
                        <Link to="/">Inicio</Link>

                        <li className="services">
                            <Link className="link-chevron" to="/">Galería <FaChevronDown style={{width: "14px", marginTop: "1px"}} /></Link>

                            <ul className="dropdown">
                                <li>
                                    <Link to="/">Fotos</Link>
                                </li>
                                <li>
                                    <Link to="/">Videos</Link>
                                </li>
                            </ul>
                        </li>

                        <Link to="/">Conciertos</Link>
                    </>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
