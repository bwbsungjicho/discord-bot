const eventModel = require('../models/eventSchema');

module.exports = {
	name: 'add',
	aliases: ['create', 'addEvent',],
	description: 'creating an event',
	async execute(client, message, cmd, args, Discord, profileData, eventData) {
		console.log("a user is about to make an event!");
		//checks to make sure its the same author thats talking throughout the code
		//so that it doesn't get 'interrupted' by other people using the bot
		const filter = (m) => m.author.id === message.author.id;

		//asking for name of event
		message.channel.send("What is the name of the event?");
		message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['ran out of time'] })
			.then(async (collected) => {
				console.log("event name entered");
				const eventNameEntered = collected.first().content;

				//asking for date of event
				message.channel.send("Date of event? (enter . if blank)");
				message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['ran out of time'] })
					.then(async (collected) => {
						console.log("date entered!");
						const DoE = collected.first().content;

						//asking for time of event
						message.channel.send("Time of event? (enter . if blank)");
						message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['ran out of time'] })
							.then(async (collected) => {
								console.log("time entered!");
								const ToE = collected.first().content;

								//asking for description
								message.channel.send("Any description? (enter . if blank)");
								message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['ran out of time'] })
									.then(async (collected) => {
										console.log("description entered");
										const eventDescription = collected.first().content;


										//creating eventID
										const eventID = Math.floor(Math.random() * 999999) + 1

										//finally entering all into database from all the collected answers
										console.log("entering into database");

										const event = await new eventModel({
											eventID: eventID,
											eventName: eventNameEntered,
											DoE: DoE,
											ToE: ToE,
											description: eventDescription,
											hostUsername: message.author.username,
										});

										const savedEvent = await event.save();

										//ending message
										message.channel.send("Event created! Your event ID is " + eventID);
									})
									.catch((err) => console.log(err));
							})
							.catch((err) => console.log(err));
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));

	}
};