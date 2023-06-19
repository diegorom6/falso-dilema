import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hero = () => {
    const images = [
        "https://i.imgur.com/SR5Esa1.jpg",
        "https://i.imgur.com/fBm2e0b.jpg",
        "https://i.imgur.com/9n1SYkC.jpg",
    ];

    return (
        <main className="hero">
            <Fade arrows={false} canSwipe={false}>
                <div className="each-slide">
                    <div>
                        <img src={images[0]} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[1]} />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={images[2]} />
                    </div>
                </div>
            </Fade>
        </main>
    );
};

export default Hero;
