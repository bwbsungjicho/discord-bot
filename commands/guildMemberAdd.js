const profileModel = require('../models/profileSchema');

module.expert = async (client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0
    });
    profile.save();
};