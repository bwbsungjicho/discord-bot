module.exports = {
	name: 'help',
	description: 'command used to display other commands',
	execute(client, message, cmd, args, Discord, profileData) {
		let newEmbed = new Discord.MessageEmbed()
			.setColor('#00FFFF')
			.setTitle('Command list')
			.setThumbnail ('https://i.imgur.com/5DVyCdP.gif')
			.setDescription('The command prefix is -')
			.addFields(
				{ name: "```create/add```", value: `Create an event`, inline: true},
				{ name: "```delete/remove```", value: "Delete an event (Must provide an event ID and be the host of that event", inline: true },
				{ name: "```event```", value: "View all the avaliable events", inline: true }
			)
			.setFooter('This is a foot');

		message.channel.send(newEmbed);
		console.log("help command called");
	}
}