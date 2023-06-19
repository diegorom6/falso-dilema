import React from "react";
import {
    FaTiktok,
    FaInstagram,
    FaSpotify,
    FaSoundcloud,
    FaAmazon,
    FaDeezer,
    FaItunes,
    FaYoutube,
    FaApple,
} from "react-icons/fa";
import { SiTidal, SiShazam } from "react-icons/si";

const Footer = () => {
    return (
        <section className="footer">
            <div className="media rrss">
                <FaTiktok />
                <FaInstagram />
                <FaYoutube />
            </div>

            <div className="media stream">
                <FaSpotify />
                <FaApple />
                <FaSoundcloud />
                <FaItunes />
                <SiShazam />
                <FaAmazon />
                <SiTidal />
                <FaDeezer />
            </div>
        </section>
    );
};

export default Footer;
