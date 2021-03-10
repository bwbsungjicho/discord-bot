// JavaScript source code
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help') {
        message.channel.send('-ping');
        message.channel.send('-f');
        message.channel.send('-event');
        message.channel.send('-die');
    } else if (command === 'ping') {
        message.channel.send('pong!');
    } else if (command === 'f') {
        message.channel.send(message.author.username + " has paid their respect");
    } else if (command === 'event' || command === 'events') {
        message.channel.send("There are no events right now.");
    } else if (command === 'die please') {
        message.channel.send("No u");
    }
});

client.login(process.env.token);