const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    async run(client) {

        await client.application.commands.set(client.commands.map(command => command.data));

        client.user.setActivity("Death Note", { type: ActivityType.Watching });

        console.log(`${client.user.username} est en ligne`);

    }
};