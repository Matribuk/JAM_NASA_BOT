import 'dotenv/config';
import { REST, Routes } from 'discord.js';

const clientId = `${process.env.APP_ID}`;
const guildId = `${process.env.GUILD_ID}`;
const token = `${process.env.DISCORD_TOKEN}`;

const commandsBuilder = [
    {
        name: "apod",
        description: "Show you the Astronomy Picture Of The Day (By NASA)",
        options: [{
            name: "date",
            description: "YYYY-MM-DD",
            type: 3,
            require: false
        }]
    },
    {
        name: "jarjar",
        description: "Show you a beautiful picture ;)"
    },
    {
        name: "newletter",
        description: "Not available yet"
    },
    {
        name: "ping",
        description: "Replies with Pong!"
    },
];

const rest = new REST({ version: "9" }).setToken(token);
(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commandsBuilder }
        );
        console.log("Successfully registered application commands.");
    } catch (error) {
        console.error(error);
    }
})();

export default commandsBuilder