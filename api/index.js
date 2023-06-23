const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const Dates = require("./models/Dates");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

//Conexión
try {
    mongoose.connect(process.env.MONGO_URL);
} catch (err) {
    console.log(err);
}

//Enpoint Get Dates
app.get("/api/dates", async (req, res) => {
    res.json(await Dates.find().limit(15));
});

//Enpoint Get Dates Panel
app.get("/api/datespanel", async (req, res) => {

    const secret = 'q05fu4d7i5s3JJjQ9vvyLWiK9c5H1gQ8';

    if (secret != null && secret != "") {
        if (req.cookies.secret == secret) {
            res.json(await Dates.find().limit(15));
        } else {
            res.json(false);
        }
    } else {
        res.json(false);
    }
});

// Endpoint Crear Dates
app.post("/api/create", async (req, res) => {

    const fecha = new Dates({
        venue: req.body.params.venue,
        date: req.body.params.date,
        city: req.body.params.city,
        link: req.body.params.link
    });

    fecha.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ha ocurrido un error."
            });
        });
});

// Endpoint eliminar Dates
app.post("/api/delete/", async (req, res) => {
    const id = req.body.params.id;

    Dates.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Error al eliminar fecha con id=${id}.`
            });
        } else {
            res.send({
                message: "Fecha borrada!"
            });
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar fecha con id=" + id
            });
        });

});

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT);
}

module.exports = app;