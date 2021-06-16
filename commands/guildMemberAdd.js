const profileModel = require('../models/profileSchema');

module.expert = async (client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.ID,
        serverID: member.guild.ID,
        coins: 1000,
        bank: 0
    });
    profile.save();
};