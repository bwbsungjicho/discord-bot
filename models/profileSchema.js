const mongoose = require("mongoose");

//creates a template for the database
const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true },
    coins: { type: Number, default: 1000 },
    bank: { type: Number },
});

//it creates this template as a model and then exports it so other .js files can access it
const profileModel = mongoose.model("profileModels", profileSchema);
module.exports = profileModel;