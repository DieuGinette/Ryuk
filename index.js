const { Client, IntentsBitField } = require("discord.js");
const client = new Client({ intents: new IntentsBitField(3276799) });
const dotenv = require("dotenv");
dotenv.config();

client.login(process.env.TOKEN);