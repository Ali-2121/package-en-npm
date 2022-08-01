const messages = [
    "Ana",
    "Melissa",
    "Diego",
    "Carol",
    "Estefania",
    "Deniss",
    "Manuel",
    "Alicia",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
};

module.exports = {randomMsg};