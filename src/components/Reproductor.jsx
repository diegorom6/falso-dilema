import React from "react";

const Reproductor = () => {
  return (
    <section className="player">
        <iframe style={{borderRadius: "8px", border: "0px"}} src="https://open.spotify.com/embed/artist/7CUvcQZsnpQo8bUR04Wxo6?utm_source=generator&theme=0" width="100%" height="470" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </section>
  )
}

export default Reproductor