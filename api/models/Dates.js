const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DatesSchema = new Schema ({
    venue: String,
    date: String,
    city: String,
    link: String
});

const DatesModel = model("Dates", DatesSchema);

module.exports = DatesModel;