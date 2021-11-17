const messages = [
    "Hola Mundo (español)",
    "Hello World (inglés)",
    "Olá Mundo (portugués)",
    "Hallo Welt (alemán)",
    "Salut Monde (francés)",
    "Ciao Mondo (italiano)",
    "Salve Mundo (latín)",
    "Hallo Wereld (neerlandéz)",
    "Aloha Honua (hawaiano)"
];

const randomHW = () => {
    const message = messages[
        Math.floor(
            Math.random() * messages.length
        )
    ];
    console.log(message);
}

module.exports = { randomHW };

