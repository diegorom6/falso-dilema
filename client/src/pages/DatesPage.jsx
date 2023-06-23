import React, { useEffect, useState } from "react";
import axios from "axios";
import Fechas from "../components/Fechas";

const DatesPage = () => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/dates`)
            .then(function (response) {
                setDates(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="dates-container">
            {dates.length > 0 ? (
                dates.map((date) => <Fechas {...date} key={date._id} />)
            ) : (
                <p className="no-dates">
                    <h1>No hay fechas.</h1>
                </p>
            )}
        </div>
    );
};

export default DatesPage;
