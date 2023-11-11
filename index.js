const { Client, IntentsBitField, Collection, messageLink } = require("discord.js");
const client = new Client({ intents: new IntentsBitField(3276799) });
const loadCommands = require("./loaders/loadCommands");
const dotenv = require("dotenv");
dotenv.config();

client.commands = new Collection();

loadCommands(client);

client.on("messageCreate", (message) => {
    const prefix = "!";
    if (!message.content.startsWith(prefix)) return;

    const name = message.content.split(" ")[0].replace(prefix, "");
    const command = client.commands.get(name);

    command.run(client, message)
});

client.login(process.env.TOKEN);