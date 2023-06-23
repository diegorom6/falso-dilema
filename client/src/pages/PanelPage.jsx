import React, { useEffect, useState } from "react";
import axios from "axios";
import Fechas from "../components/Fechas";
import Cookies from "js-cookie";

const PanelPage = () => {
    const [dates, setDates] = useState([]);
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [city, setCity] = useState("");
    const [link, setLink] = useState("");
    const [permiso, setPermiso] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search).get(
            "secret"
        );

        const cookie = Cookies.get('secret');
        
        if (urlParam != null || cookie == "q05fu4d7i5s3JJjQ9vvyLWiK9c5H1gQ8") {

            Cookies.set("secret", urlParam);
            
            if (urlParam == "q05fu4d7i5s3JJjQ9vvyLWiK9c5H1gQ8") {
                setPermiso(true);
            }
        }

        axios
            .get(`${process.env.REACT_APP_API_URL}/datespanel`, {
                withCredentials: true,
            })
            .then(function (response) {
                setDates(response.data);

                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    async function create(e) {
        e.preventDefault();

        axios
            .post(`${process.env.REACT_APP_API_URL}/create`, {
                withCredentials: true,
                params: {
                    venue: venue,
                    date: date,
                    city: city,
                    link: link,
                },
            })
            .then(function (res) {
                alert("Fecha Creada!");
            })
            .catch(function (err) {
                alert("Ha ocurrido un error al crear la fecha");
            });
    }

    if (loading) {
        return <div className="cargando">Cargando...</div>; // Muestra el loader mientras se carga la data
    }

    return (
        <div className="dates-container">
            {permiso ? (
                <React.Fragment>
                    <form className="form-create" onSubmit={create}>
                        <p>Agregar fechas</p>
                        <input
                            type="text"
                            placeholder="Lugar"
                            value={venue}
                            onChange={(ev) => setVenue(ev.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Ciudad"
                            value={city}
                            onChange={(ev) => setCity(ev.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Fecha (dd-MM-yyyy)"
                            value={date}
                            onChange={(ev) => setDate(ev.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Link compra tickets"
                            value={link}
                            onChange={(ev) => setLink(ev.target.value)}
                        />
                        <button className="boton-borrar">Agregar Fecha</button>
                    </form>

                    {dates.length > 0 ? (
                        dates.map((date) => <Fechas {...date} key={date._id} />)
                    ) : (
                        <p className="no-dates">
                            <h1>No hay fechas.</h1>
                        </p>
                    )}
                </React.Fragment>
            ) : (
                <p className="no-dates">
                    <h1>No tienes permiso.</h1>
                </p>
            )}
        </div>
    );
};

export default PanelPage;
