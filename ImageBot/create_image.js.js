const Jimp = require('jimp');

const imagePath = 'template.png';
const imagePathZIZI = 'image.png';

new Jimp(1920, 1080, 0xFF1C0049, (err, image) => {
    if (err) throw err;

    Jimp.read(imagePath)
        .then(template => {
            return Jimp.loadFont(Jimp.FONT_SANS_32_WHITE)
                .then(font => {
                    // Ajouter du texte centré sur l'image avec la nouvelle couleur
                    template.print(
                        font, // Utiliser la police de caractères chargée
                        0,    // Position X
                        0,    // Position Y
                        {
                            text: "Titre image", // Texte à afficher
                            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER, // Alignement horizontal centré
                            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE     // Alignement vertical centré
                        },
                        template.getWidth() - 350, // Position X ajustée
                        template.getHeight() - 400  // Position Y ajustée
                    );

                    // Charger l'image zizi
                    Jimp.read(imagePathZIZI)
                        .then(zizi => {
                            // Enregistrer l'image template avec le texte ajouté
                            template.write('output.jpg', (err) => {
                                if (err) throw err;
                                console.log('Image créée avec succès!');
                            });
                        })
                        .catch(err => {
                            console.error('Erreur lors du chargement de l\'image zizi :', err);
                        });
                });
        })
        .catch(err => {
            console.error('Erreur lors du chargement de l\'image template :', err);
        });
});
