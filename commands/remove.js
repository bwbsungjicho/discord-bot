const eventModel = require('../models/eventSchema');

module.exports = {
	name: 'remove',
	aliases: ['delete'],
	description: 'delete an event',
	async execute(client, message, cmd, args, Discord, eventData) {

		eventModel.findOneAndDelete({
			hostUsername: message.author.username,
			eventID: args,
		}, (err, res) => {
			if (err) console.log(err);

			//checks whether the delete function was succesful
			if (res) {
				message.channel.send("Event has been deleted!");
			} else {
				message.channel.send("The event ID is wrong or you're not the host.");
			};
		})


		////asking what to delete
		//const filter = (m) => m.author.id === message.author.id;
		//message.channel.send("What is the eventID for the event that you want to delete?");

		////bot then waits for the user's response and records the response.
		//message.channel.awaitMessages(filter, { max: 1, errors: ['ran out of time'] })
		//	.then(async (collected) => {
		//		const enteredID = collected.first().content;

		//		//goes into the database and finds the one that has that specific eventID and username
		//		//and then deletes that entry from the database
		//		eventModel.findOneAndDelete({
		//			hostUsername: message.author.username,
		//			eventID: enteredID,
		//		}, (err, res) => {
		//				if (err) console.log(err);

		//				//checks whether the delete function was succesful
		//				if (res) {
		//					message.channel.send("Event has been deleted!");
		//				} else {
		//					message.channel.send("The event ID is wrong or you're not the host.");
		//				};
		//		})
		//	}).catch((err) => console.log(err));
			


	}
}