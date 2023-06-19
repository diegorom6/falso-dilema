import React from "react";

const Fotos = () => {
    return (
        <section className="section-fotos">
            <h1>Fotos</h1>

            <div className="contenedor-fotos">
                <div className="img-box">
                    <img src="https://i.imgur.com/APH4e8s.jpg" alt="foto1" />
                </div>
                <div className="img-box">
                    <img src="https://i.imgur.com/ieUcWDk.jpg" alt="foto2" />
                </div>
                <div className="img-box">
                    <img src="https://i.imgur.com/S6MU0fX.jpg" alt="foto3" />
                </div>
                <div className="img-box">
                    <img src="https://i.imgur.com/Bz2lvML.jpg" alt="foto4" />
                </div>
            </div>

            <button className="boton">Galería</button>
        </section>
    );
};

export default Fotos;
