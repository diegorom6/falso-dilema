import React from "react";

const Videos = () => {
    return (
        <section className="section-videos">
            <h1>Videos</h1>

            <div className="contenedor-videos">
                <div className="video-box">
                    <p>Sesión en Vivo</p>
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/RwWWIFmnKf8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="video-box">
                    <p>Mini Documental</p>
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/NniNfrUpF6I"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                <div className="video-box">
                    <p>En Vivo Rancagua</p>
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/G0XfkuRO6v0"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>

            <button className="boton">Ver más</button>
        </section>
    );
};

export default Videos;
