import { formattedDate } from "../app";
import { exec } from "child_process";

async function apod(interaction: any) {
    if (interaction.commandName === "apod") {
        if (!interaction.options.get('date')) {
            exec(`python3 ./assets/script/apod-maker.py ${formattedDate}`, () => {
                interaction.reply({files: [`./assets/images/APOD/iod-${formattedDate}.jpg`]});
            });
        } else {
            const arg = interaction.options.get('date').value;
            exec(`python3 ./assets/script/apod-maker.py ${arg}`, () => {
                interaction.reply({files: [`./assets/images/APOD/iod-${arg}.jpg`], contentType: "image"});
            });
        }
    }
}

export default apod