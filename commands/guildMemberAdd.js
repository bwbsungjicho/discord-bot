//takes the schema model from the profileSchema.js file, and uses it in here
const profileModel = require('../models/profileSchema');

module.exports = async (client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0
    });
    profile.save();
    console.log("new profile made for 'guild member add'")
};