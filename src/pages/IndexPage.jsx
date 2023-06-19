import React from "react";
import Hero from "../components/Hero";
import Fotos from "../components/Fotos";
import Videos from "../components/Videos";
import Reproductor from "../components/Reproductor";
import Footer from "../components/Footer";

const IndexPage = () => {
    return (
        <>
            <Hero />
            <Fotos />
            <Videos />
            <Reproductor />
            <Footer />
        </>
    );
};

export default IndexPage;
