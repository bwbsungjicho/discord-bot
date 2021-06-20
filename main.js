const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const client = new Discord.Client();

//logs into the mongo database
console.log("attemping to log into mongoose");
mongoose.connect(process.env.dbPassword, {
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
client.login(process.env.token);
