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
            <Reproductor />
            <Fotos />
            <Videos />
            <Footer />
        </>
    );
};

export default IndexPage;
