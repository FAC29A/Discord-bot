const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

//module.exports is how you export data in Node.js
// so that you can require() (import) is in other files

//The data property, provides command definition shown above for registering to Discord.
//execute method, contains the functionality to run from our event handler when the command is used.