module.exports = {
	name: 'ping', 
	description: 'This says pong if u say ping',
	execute(client, message, args) {
		message.channel.send('pong!');
	}
}