import { formattedDate } from "../app";
import { exec } from "child_process";

async function apod(interaction: any) {
    if (interaction.commandName === "apod") {
        if (!interaction.options.get('date')) {
            exec(`python3 ./assets/script/apod-maker.py ${formattedDate}`, async (error, stdout, stderr) => {
                console.log(stdout);
                await interaction.reply({files: [`./assets/images/APOD/iod-${formattedDate}.jpg`]});
            });
        } else {
            const arg = interaction.options.get('date').value;
            exec(`python3 ./assets/script/apod-maker.py ${arg}`, async (error, stdout, stderr) => {
                console.log(stdout);
                await interaction.reply({files: [`./assets/images/APOD/iod-${arg}.jpg`], contentType: "image"});
            });
        }
    }
}

export default apod