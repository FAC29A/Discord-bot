const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('Replies with a joke!'),
	async execute(interaction) {
		await interaction.reply('Why was the skeleton afraid to fart? Because he did not have the guts!');
	},
};
