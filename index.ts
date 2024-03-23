import fs from 'fs';
import { Client, ClientOptions } from 'discord.js';
const dotenv = require('dotenv').config()

const clientOptions: ClientOptions = {intents: 0};
const client = new Client(clientOptions);

client.once('ready', function () {
    console.log("Bot connected!")
})

client.login(process.env.DISCORD_TOKEN)
