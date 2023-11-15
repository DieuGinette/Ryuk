const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    run(client) {

        client.user.setActivity("Death Note", { type: ActivityType.Watching });

        console.log(`${client.user.username} est en ligne`);

    }
};