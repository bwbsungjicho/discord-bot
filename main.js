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

    if (command === 'ping') {
        message.channel.send('pong!');
    }
    if (command === 'f') {
        message.channel.send(message.author.username + " has paid their respect");
    }
    if (command === 'die') {
        message.channel.send("No thanks.");
    }
});

client.login(process.env.token);