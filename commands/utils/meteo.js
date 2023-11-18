const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("meteo")
        .setDescription("Affiche la météo d'une ville française")
        .addStringOption(option =>
            option.setName('ville')
                .setDescription("Le nom de la ville")
                .setRequired(true)),

    async run(interaction) {
        const ville = interaction.options.getString('ville');

        try {
            const apiKey = process.env.OPENWEATHERMAP_TOKEN;
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ville)},fr&appid=${apiKey}&units=metric`;

            const response = await axios.get(apiUrl);

            const weatherData = response.data;

            // Récupérer l'heure à laquelle la commande a été tapée
            const timestamp = new Date();
            const heureCommande = timestamp.toLocaleTimeString('fr-FR');

            // URL de l'icône de météo fournie par OpenWeatherMap
            const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

            // Créer un embed personnalisé
            const embed = {
                color: 0x3498db,
                title: `Météo à ${weatherData.name}`,
                fields: [
                    {
                        name: "Température",
                        value: `${weatherData.main.temp} °C`,
                        inline: true,
                    },
                    {
                        name: "Humidité",
                        value: `${weatherData.main.humidity}%`,
                        inline: true,
                    },
                    {
                        name: "Conditions",
                        value: weatherData.weather[0].description,
                    },
                ],
                thumbnail: {
                    url: weatherIconUrl,
                },
                footer: {
                    text: `Commande tapée par ${interaction.user.tag} à ${heureCommande}`,
                    icon_url: interaction.user.displayAvatarURL({ dynamic: true }),
                },
            };

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply("Erreur lors de la récupération des informations météo.");
        }
    },
};