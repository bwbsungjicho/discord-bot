const eventModel = require("../../models/eventSchema");

module.exports = async (Discord, client, message) => {
    const prefix = '-';

    //checks if it is sent with a prefix or if it's sent by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //creates a new variable called eventData
    let eventData;
    try {
        //it sets eventData to the values of the entries in the eventModel database
        eventData = await eventModel.find();
        //counts the amount of entries in the eventModel database
        eventCount = await eventModel.collection.countDocuments();
    } catch (err) {
        console.log(err);
    }
    

    //slices the commands at every space bar so you can enter multiple comnmands in a single line
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, cmd, args, Discord, eventData, eventCount);
};