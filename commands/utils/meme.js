require('dotenv').config();
const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("Génère un mème aléatoire")
        .setDMPermission(true)
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async run(interaction) {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            const memes = response.data.data.memes;

            const randomMeme = memes[Math.floor(Math.random() * memes.length)];

            const embed = {
                color: 0x3498db,
                title: 'Mème aléatoire',
                image: {
                    url: randomMeme.url,
                },
                footer: {
                    text: `Commande tapée par ${interaction.user.tag} à ${new Date().toLocaleTimeString('fr-FR')}`,
                    icon_url: interaction.user.displayAvatarURL({ dynamic: true }),
                },
            };

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply("Erreur lors de la récupération du mème.");
        }
    },
};