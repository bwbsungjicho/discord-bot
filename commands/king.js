module.exports = {
	name: '',
	description: '',
	execute(message, args) {
		if (message.member.roles.cache.has('689743413884879012')) {
			message.channel.send("YOU'RE SECSY");
		} else {
			message.channel.send("You suck cuz your're not a king");
        }
	}
}