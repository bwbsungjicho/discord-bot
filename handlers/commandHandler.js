const fs = require('fs');

module.exports = (client, Discord) => {
    //searches through the commands folder that ends with the .js file
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        if (command.name) {
            //if the name of the commands are called, then it executes that said command
            //and if it doesn't find a command with the name called, it continues and ignores
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}