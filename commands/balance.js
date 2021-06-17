module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "check user balance (test)",
    execute(client, message, cmd, args, Discord, profileData) {
        message.channel.send(`Your wallet balance is ${profileData.coins}, your bank balance is ${profileData.bank}`);
    }
}