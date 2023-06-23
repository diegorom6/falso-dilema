import React from "react";
import {
    FaTiktok,
    FaInstagram,
    FaSpotify,
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
                <a
                    href="https://www.tiktok.com/@falsodilema"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaTiktok color="white" />
                </a>

                <a
                    href="https://www.instagram.com/falsodilemaoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram color="white" />
                </a>

                <a
                    href="https://www.youtube.com/@falsodilemaoficial2473"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube color="white" />
                </a>
            </div>
            
            <div className="media stream">
                <a
                    href="https://open.spotify.com/artist/7CUvcQZsnpQo8bUR04Wxo6?go=1&sp_cid=9f90c4345e693426588328613445a281&utm_source=embed_player_p&utm_medium=mobile&nd=1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSpotify color="white" />
                </a>

                <a
                    href="https://music.apple.com/cl/artist/falso-dilema/1675177773"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaApple color="white" />
                </a>

                <a
                    href="https://music.apple.com/cl/artist/falso-dilema/1675177773"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaItunes color="white" />
                </a>

                <a href="https://www.shazam.com/es-es/artist/falso-dilema/1675177773" target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiShazam color="white" />
                </a>
                
                <a href="https://music.amazon.com/artists/B0BX7PB55P/falso-dilema" target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaAmazon color="white" />
                </a>

                <a href="https://www.deezer.com/es/artist/203991737" target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaDeezer color="white" />
                </a>

                <a href="https://tidal.com/artist/37708889" target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTidal color="white" />
                </a>
            </div>
        </section>
    );
};

export default Footer;
