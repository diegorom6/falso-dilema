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
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="video-box">
                    <p>Mini Documental</p>
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/NniNfrUpF6I"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="video-box">
                    <p>En Vivo Rancagua</p>
                    <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/G0XfkuRO6v0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>

            <div className="datos-contacto">
                <h4>Contacto</h4>
                <p>falsodilema2021@gmail.com</p>

                <h4>Representante</h4>
                <p>Matías Valenzuela O.</p>

                <h4>N° Telefónico</h4>
                <p>+56999102907</p>
            </div>
        </section>
    );
};

export default Videos;
