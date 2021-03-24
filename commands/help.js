module.exports = {
	name: 'help',
	description: 'command used to display other commands',
	execute(message, args, Discord) {
		let newEmbed = new Discord.MessageEmbed()
			.setTitle('Commands')
			.setDescription('Available commands')
			.addFields(
				{ name: "-ping", value: "Makes the bot say pong" },
				{ name: "-f", value: "If you wanna pay your respects" },
				{ name: "-king", value: "Only cool people can use this command" }
			)
			.setFooter('This is a foot');

		message.channel.send(newEmbed);
	}
}