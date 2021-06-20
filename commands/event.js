module.exports = {
	name: 'event',
	aliases: ['events'],
	description: 'viewing an event',
	async execute(client, message, cmd, args, Discord, profileData, eventData, eventCount) {
		if (eventData[0]) {
			for (let i = 0; i < eventCount + 1; i++) {
				randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
				const embed = new Discord.MessageEmbed()
					.setTitle(`${eventData[i].eventName}`)
					.setColor(randomColor)
					.setThumbnail('https://blogs-images.forbes.com/erikkain/files/2018/10/balloons-2.jpg')
					.addFields(
						{ name: "Date of event", value: `${eventData[i].DoE}` },
						{ name: "Time of event", value: `${eventData[i].ToE}` },
						{ name: "Description", value: `${eventData[i].description}` },

					)
					.setFooter(`Host: ${eventData[i].hostUsername}\nEvent ID: ${eventData[i].eventID}`);

				message.channel.send(embed);
            }
		} else {
			message.channel.send(process.env.token);
        }
	}
}