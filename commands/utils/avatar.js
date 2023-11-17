const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Renvoie l'avatar d'un utilisateur")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .addUserOption(option =>
            option.setName('utilisateur')
                .setDescription("L'utilisateur dont vous voulez obtenir l'avatar")
                .setRequired(true)),

    async run(interaction) {
        const user = interaction.options.getUser('utilisateur') || interaction.user;

        const avatarUrl = user.displayAvatarURL({ dynamic: true, size: 512 });

        const embed = new EmbedBuilder()
            .setTitle(`Avatar de ${user.tag}`)
            .setImage(avatarUrl)
            .setColor("#7289DA")
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    }
};
