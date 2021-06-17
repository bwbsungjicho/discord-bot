const mongoose = require("mongoose");

//creates a template for the database
const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    coins: { type: Number, default: 1000 },
    bank: { type: Number },
});

const eventSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true },
    serverID: { type: String, require: true },
    events: { type: Number, default: 1000 },
    ass: { type: Number },
});

//it creates this template as a model and then exports it so other .js files can access it
const profileModel = mongoose.model("ProfileModels", profileSchema);
const eventModel = mongoose.model("eventModels", eventSchema);
module.exports = profileModel;
module.exports = eventModel;