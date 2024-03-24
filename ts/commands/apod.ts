import { formattedDate } from "../app";
import { exec } from "child_process";

async function apod(interaction: any) {
    if (interaction.commandName === "apod") {
        if (!interaction.options.get('date')) {
            exec(`python3 ./assets/script/apod-maker.py ${formattedDate}`, async (error, stdout, stderr) => {
                await interaction.deferReply();
                console.log(stdout);
                await interaction.editReply({files: [`./assets/images/APOD/iod-${formattedDate}.jpg`]});
            });
        } else {
            const arg = interaction.options.get('date').value;
            await interaction.deferReply();
            exec(`python3 ./assets/script/apod-maker.py ${arg}`, async (error, stdout, stderr) => {
                console.log(stdout);
                await interaction.editReply({files: [`./assets/images/APOD/iod-${arg}.jpg`]});
            });
        }
    }
}

export default apod