const Discord = require('discord.js');
const fs = require('fs');
const mongoose = require('mongoose');
const client = new Discord.Client();
const prefix = "-";
const profileModel = require('../models/profileSchema');

//logs into the mongo database
mongoose.connect("mongodb+srv://adminUser:ihavecripplingdepression@eventplannerbot.a1ook.mongodb.net/realEventPlannerDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});

client.commands = new Discord.Collection();

//reads js files and js files only from the command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//loops the command folder to check for all commands in it
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is online!');
});

//Commands handler
module.exports = async (Discord, client, message) => {
    client.on('message', message => {
        //checks if it is sent with a prefix or if it's sent by a bot
        if (!message.content.startsWith(prefix) || message.author.bot) {
            return;
        }

        //slices the commands at every space bar so you can enter multiple comnmands in a single line
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        //creating new profile when interacting with the bot
        let profileData;
        try {
            profileData = await profileModel.fineOne({ userID: message.author.id });
            if (!profileData) {
                let profile = await profileModel.create({
                    userID: message.author.id,
                    serverID: message.guild.id,
                    coins: 1000,
                    bank: 0
                });
                profile.save();
            }
        } catch (err) {
            console.log(err);
            message.channel.send("Error occured in database");
        }

        //The command section
        if (command === 'ping') {
            client.commands.get('ping').execute(message, args);
        }
        if (command === 'f') {
            message.channel.send(message.author.username + " has paid their respect");
        }
        if (command === 'event' || command === 'events') {
            message.channel.send("There are no events right now.");
        }
        if (command === 'help') {
            client.commands.get('help').execute(message, args, Discord);
        }
        if (command === 'peasant') {
            client.commands.get('peasant').execute(message, args, Discord);
        }
    });
};
client.login(process.env.token);
