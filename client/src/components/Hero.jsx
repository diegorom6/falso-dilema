import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hero = () => {
    const images = [
        "https://i.imgur.com/SR5Esa1.jpg",
        "https://i.imgur.com/fBm2e0b.jpg",
        "https://i.imgur.com/Bz2lvML.jpg",
    ];

    return (
        <main className="hero">
            <div className="overlay">
                {/* <img src={logo2} alt="Logo 2" /> */}
                <p style={{marginTop: "4rem"}}>
                    Falso Dilema nace en la comuna de San Javier y Talca, Región
                    del Maule (Chile). Sus integrantes son: Sebastián Bustos en
                    la voz, Matías Valenzuela en la guitarra, Johnatan Nicolao
                    en la batería, Matías Troncoso en el bajo y coros, y David
                    Nuñez en la guitarra y coros.
                </p>
                <br />
                <p>
                    Unidos por la música "hardcore Punk", Falso Dilema busca no
                    solo entregar un mensaje social y político, sino que a
                    través de sus letras cargadas de connotaciones, se
                    compromete además con las problemáticas de la cotideaneidad
                    y lo contemporáneo.
                </p>
            </div>

            <Fade arrows={false} canSwipe={false}>
                <div className="each-slide">
                    <div>
                        <img src={images[0]} alt="img1" className="slideshow" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[1]} alt="img2" className="slideshow" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[2]} alt="img3" className="slideshow" />
                    </div>
                </div>
            </Fade>
        </main>
    );
};

export default Hero;
