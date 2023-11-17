const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Renvoie la latence du bot")
        .setDMPermission(true)
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async run(interaction) {
        await interaction.reply(`Pong :ping_pong: La latence du bot est de :  \`${interaction.client.ws.ping}\` ms.`)
    }
};