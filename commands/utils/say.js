const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Répète le texte fourni en argument")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.MentionEveryone)
        .addStringOption(option =>
            option.setName('texte')
                .setDescription("Le texte que le bot doit répéter")
                .setRequired(true)),

    async run(interaction) {
        const texte = interaction.options.getString('texte');
        await interaction.reply(texte);
    }
};
