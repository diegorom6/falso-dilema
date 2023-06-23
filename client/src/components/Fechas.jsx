import React, { useEffect, useState } from "react";
import CalendarIcon from "react-calendar-icon";
import { ThemeProvider } from "@emotion/react";
import { Link } from 'react-router-dom';
import { format, parse } from "date-fns";
import Cookies from "js-cookie";
import axios from "axios";

const theme = {
    calendarIcon: {
        textColor: "white", // text color of the header and footer
        primaryColor: "black", // background of the header and footer
        backgroundColor: "black",
    },
};

const Fechas = ({ city, date, link, venue, _id }) => {

    const [secretCorrect, setSecretCorrect] = useState();
    const [secret, setSecret] = useState("q05fu4d7i5s3JJjQ9vvyLWiK9c5H1gQ8");

    useEffect(() => {
        const cookie = Cookies.get('secret');

        if (cookie == secret) {
            setSecretCorrect(true);
        }
    }, [])

    const parsedDate = parse(date, "dd-MM-yyyy", new Date());

    async function borrar(_id) {
        axios.post(`${process.env.REACT_APP_API_URL}/delete`, {
            params: {
                id: _id
            }
        }).then(function (res) {
            alert("Fecha Eliminada!");
        })
        .catch(function (err) {
            alert("Ha ocurrido un error al borrar la fecha");
        });
    }

    return (
        <div className="fecha">
            <div>
                <ThemeProvider theme={theme}>
                    <CalendarIcon date={parsedDate} />
                </ThemeProvider>
            </div>

            <div className="city-venue">
                <h1>{city}</h1>
                <p>{venue}</p>
            </div>

            <div className="tickets">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                    Comprar Entradas
                </Link>

                {secretCorrect ? <button className="boton-borrar" onClick={() => borrar(_id)}>Borrar Fecha</button> : ""}
            </div>
        </div>
    );
};

export default Fechas;