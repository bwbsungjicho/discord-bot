module.exports = {
	name: 'king',
	description: '',
	execute(message, args) {
		if (message.member.roles.cache.has('689743413884879012')) {
			message.channel.send("YOU'RE SECSY OH DADDY");
		} else {
			message.channel.send("You suck cuz your're not a king");
        }
	}
}