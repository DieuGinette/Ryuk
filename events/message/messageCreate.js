const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    run(client, message) {
        const prefix = "!";
        if (!message.content.startsWith(prefix)) return;

        const arrayMessage = message.content.split(" ");
        const name = arrayMessage[0].slice(prefix.length, arrayMessage[0].length);
        const command = client.commands.get(name);

        command.run(client, message)
    }
};