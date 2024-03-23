import 'dotenv/config';
import { Client } from 'discord.js';
import commandsBuilder from "./commandsBuilder";

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent']
});

client.on('ready', (c) => {
    commandsBuilder;
    console.log(`${c.user.username} is online.`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.reply("Pong!");
    }
    if (interaction.commandName === "jarjar") {
        await interaction.reply({files: ["./assets/jamPic/jarjar.png"]});
    }
    if (interaction.commandName === "apod") {
        await interaction.reply({files: ["./assets/APOD/template2.jpg"]});
    }
    if (interaction.commandName === "newletter") {
        await interaction.reply("Not available yet")
    }
});

client.login(process.env.DISCORD_TOKEN);