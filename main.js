const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const client = new Discord.Client();

//logs into the mongo database
mongoose.connect("mongodb+srv://adminUser:ihavecripplingdepression@eventplannerbot.a1ook.mongodb.net/eventPlannerDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});

client.commands = new Discord.Collection();

//new event handler
client.events = new Discord.Collection();

//executes commands through the files in the handlers folder
['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

//logs into the discord bot
client.login('ODE4NzMzNTg2MTA1NDk5Njc4.YEcXEg.Aqe1K4M_w27qZf7dsxTGiOxayyQ');
