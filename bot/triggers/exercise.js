exports.meta = {
    name: "Exercise",
    description: "Some sweet workout moves from yaboi, Chabudz",
    triggers: [
        "exercise",
        "fit",
        "fitness",
        "moves",
        "workout",        
    ],
    example: "Damn I sure do love *exercise*!",
    signature: "exercise"
}

const gifs = [
    "5w2hYvUDpaJaXMofhf",
    "xkhE54JlWjRNYXCYbu",
    "wKdnwYxVbXpwXZ99NI",
    "35Koksb9GwsifYhu9Q",
    "2wXstu3OO7EXqHhwgA",
    "pslSsRVsraewaPzGbx",
    "X8VxdpqWMqbTNQs2RY",
    "1Ajo7ORbVdheMjfLjq",
    "Ojr8CstK9rP8xcS9Ek"
];

module.exports.run = (client, message, args) => {
    let gif = gifs[Math.floor(Math.random() * gifs.length)];
    message.channel.send(`https://media.giphy.com/media/${gif}/giphy.gif`);
}