const mongoose = require("mongoose");

//the fields in the events schema
const eventSchema = new mongoose.Schema({
    eventID: mongoose.SchemaTypes.Number,
    eventName: mongoose.SchemaTypes.String,
    DoE: mongoose.SchemaTypes.String,
    ToE: mongoose.SchemaTypes.String,
    description: mongoose.SchemaTypes.String,
    hostUsername: mongoose.SchemaTypes.String,
});

//it creates this template as a model and then exports it so other .js files can access it
const eventModel = mongoose.model("eventModels", eventSchema);
module.exports = eventModel;