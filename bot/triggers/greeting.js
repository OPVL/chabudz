exports.meta = {
    name: "Greeting",
    description: "Careful, he's always listening.",
    triggers: [
        "hello",
        "hi",
        "morning",
        "hiya",
        "howdy",
        "hey",
        "hola",
    ],
    example: "Damn I sure do love *exercise*!",
    signature: "greeting"
}

module.exports.run = (client, message, args) => {

    message.channel.send(getGif());
}

function getGif() {
    let now = new Date().getUTCHours();

    if (now > 17)
        return 'https://media.giphy.com/media/mnqerRRvbjakl3NnQA/giphy.gif';

    if (now > 11)
        return 'https://media.giphy.com/media/401C6a3ghtrYiHTZnn/giphy.gif';
    
    return 'https://media.giphy.com/media/7e77FVg6fNhfQM61lh/giphy.gif'
}
