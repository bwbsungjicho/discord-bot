const fs = require('fs');

module.exports = (client, Discord) => {
    const loadDir = (dirs) => {
        //searches through the events folder to look for any files that ends with .js
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'))

        //it gets the name of the file, splits at the '.' bit to ignore the .js bit, and then calls that event
        //if the name of that event is called
        for (const file of eventFiles) {
            const event = require(`../events/${dirs}/${file}`);
            const eventName = file.split('.')[0];
            client.on(eventName, event.bind(null, Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => loadDir(e));
};