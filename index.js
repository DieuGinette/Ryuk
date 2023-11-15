const { Client, IntentsBitField, Collection, messageLink } = require("discord.js");
const client = new Client({ intents: new IntentsBitField(3276799) });
const loadCommands = require("./loaders/loadCommands");
const loadEvents = require("./loaders/loadEvents");
const dotenv = require("dotenv");
dotenv.config();

client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.login(process.env.TOKEN);