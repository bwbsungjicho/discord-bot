module.exports = {
	name: 'help',
	description: 'command used to display other commands',
	execute(message, args, Discord) {
		let newEmbed = new Discord.MessageEmbed()
			.setColor('#fcb603')
			.setTitle('Command list')
			.setThumbnail ('https://i.imgur.com/5DVyCdP.gif')
			.setDescription('The command prefix is -')
			.addFields(
				{ name: "```ping```", value: "Makes the bot say pong", inline: true},
				{ name: "```f```", value: "If you wanna pay your respects", inline: true },
				{ name: "```king```", value: "Only cool people can use this command", inline: true }
			)
			.setFooter('This is a foot');

		message.channel.send(newEmbed);
	}
}