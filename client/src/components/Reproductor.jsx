import React from "react";

const Reproductor = () => {
    return (
        <>
            <section className="video-embed">
                <iframe
                    width="1200"
                    height="515"
                    src="https://www.youtube.com/embed/N-m7xCIN_3w"
                    title="YouTube video player"
                    style={{ border: "0px" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>

            <section className="player">
                <iframe
                    style={{ borderRadius: "8px", border: "0px" }}
                    src="https://open.spotify.com/embed/artist/7CUvcQZsnpQo8bUR04Wxo6?utm_source=generator&theme=0"
                    width="100%"
                    height="470"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </section>
        </>
    );
};

export default Reproductor;
