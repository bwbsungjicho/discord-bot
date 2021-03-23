const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
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

client.on('message', message => {
    //checks if it is sent with a prefix or if it's sent by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    //slices the commands at every space bar so you can enter multiple comnmands in a single line
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

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
});

client.login(process.env.token);