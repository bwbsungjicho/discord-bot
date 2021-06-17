const profileModel = require("../../models/profileSchema");

module.exports = async (Discord, client, message) => {
    const prefix = '-';

    //checks if it is sent with a prefix or if it's sent by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //creates a variable that contains the data of a profile of a user
    //it checks whether the user who use interacted with the bot has a profile in the database already
    //if it doesn't, it creates a new profile for the user
    console.log("user sent a message!");
    let profileData;
    try {
        console.log("attempting to create profile...");
        profileData = await profileModel.findOne({ userID: message.author.id });
        console.log("Checked if the user already has a profile");
        if (!profileData) {
            console.log("this user doesn't have a profile");
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 1000,
                bank: 0,
            });
            console.log("created new profile for this person");
        } else {
            console.log("this user already has a profile");
        };
    } catch(err) {
        console.log(err);
    }

    //slices the commands at every space bar so you can enter multiple comnmands in a single line
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, cmd, args, Discord, profileData);
};