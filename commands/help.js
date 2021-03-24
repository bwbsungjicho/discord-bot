module.exports = {
	name: 'help',
	description: 'command used to display other commands',
	execute(message, args, Discord) {
		let newEmbed = new Discord.MessageEmbed()
			.setTitle('Commands')
			.thumbnail(url: 'file:///C:/Users/minec/Downloads/spoooky%20scary%20skeleton%20gif.gif')
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