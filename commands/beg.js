const profileModel = require('../models/profileSchema');

module.exports = {
    name: "beg",
    aliases: [],
    permissions: [],
    description: "begging (test)",
    async execute(client, message, cmd, args, Discord, profileData) {
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,

        }, {
            $inc: {
                coins: 500,
            }, 
        });
    }
}