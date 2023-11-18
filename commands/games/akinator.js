const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const akinator = require("discord.js-akinator");

const language = "fr";
const childMode = false;
const gameType = "character";
const useButtons = true;
const embedColor = "#1F1E33";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("akinator")
        .setDescription("jouer avec akinator")
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async run(interaction) {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === "akinator") {
            akinator(interaction, {
                language: language,
                childMode: childMode,
                gameType: gameType,
                useButtons: useButtons,
                embedColor: embedColor,
            });
        }
    }
};