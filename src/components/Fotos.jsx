import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

const Fotos = () => {
    const images = [
        {
            src: "https://i.imgur.com/EMa7VX8.jpg",
            alt: "foto1",
            render: true,
        },
        {
            src: "https://i.imgur.com/XfPsKHT.jpg",
            alt: "foto2",
            render: true,
        },
        {
            src: "https://i.imgur.com/HCm9CKC.jpg",
            alt: "foto3",
            render: true,
        },
        {
            src: "https://i.imgur.com/mmEeJsR.jpg",
            alt: "foto4",
            render: true,
        },
        {
            src: "https://i.imgur.com/fBm2e0b.jpg",
            alt: "foto5",
        },
        {
            src: "https://i.imgur.com/APH4e8s.jpg",
            alt: "foto6",
        },
        {
            src: "https://i.imgur.com/eO8Lwqu.jpg",
            alt: "foto7",
        },
        {
            src: "https://i.imgur.com/JMjmiqu.jpg",
            alt: "foto8",
        },
        {
            src: "https://i.imgur.com/er7BWzb.jpg",
            alt: "foto9",
        },
        {
            src: "https://i.imgur.com/UQ4xEJo.jpg",
            alt: "foto10",
        },
        {
            src: "https://i.imgur.com/XLwPeeC.jpg",
            alt: "foto11",
        },
        {
            src: "https://i.imgur.com/ieUcWDk.jpg",
            alt: "foto12",
        },
        {
            src: "https://i.imgur.com/SR5Esa1.jpg",
            alt: "foto13",
        },
        {
            src: "https://i.imgur.com/wOVY2X4.jpg",
            alt: "foto14",
        },
        {
            src: "https://i.imgur.com/S6MU0fX.jpg",
            alt: "foto15",
        },
        {
            src: "https://i.imgur.com/saY0h0p.jpg",
            alt: "foto16",
        },
        {
            src: "https://i.imgur.com/9n1SYkC.jpg",
            alt: "foto17",
        },
        {
            src: "https://i.imgur.com/Bz2lvML.jpg",
            alt: "foto18",
        },
    ];

    const [filteredImages, setFilteredImages] = useState([]);
    const [toggler, setToggler] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imageElements, setImageElements] = useState();

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setToggler(!toggler);
    };

    const handleResize = () => {
        const newWindowWidth = window.innerWidth;

        if (window.innerWidth <= 900) {
            const filteredImages = images.filter((image) => image.render);
            setFilteredImages(filteredImages);
        } else {
            setFilteredImages(images);
        }

        setWindowWidth(newWindowWidth);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const imageElements = filteredImages.map((image, index) => (
            <div className="img-box" key={index}>
                <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => handleImageClick(index)}
                />
            </div>
        ));
        setImageElements(imageElements);

        setToggler(!toggler);
    }, [filteredImages, currentIndex]);

    return (
        <section className="section-fotos">
            <h1>Fotos</h1>

            <div className="contenedor-fotos">{imageElements}</div>

            <FsLightbox
                toggler={toggler}
                sources={images.map((image) => image.src)}
                type="image"
                slide={currentIndex + 1}
            />
        </section>
    );
};

export default Fotos;
