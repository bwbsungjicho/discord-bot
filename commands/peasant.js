module.exports = {
	name: 'peasant',
	description: '',
	execute(client, message, args) {
		if (message.member.roles.cache.has('436731456593854466')) {
			message.channel.send("U HAVE TINY PP U PEASANT");
		} else {
			message.channel.send("You suck cuz your're not a king");
        }
	}
}