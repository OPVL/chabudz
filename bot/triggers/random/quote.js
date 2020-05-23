if ((num == target) || config('app.debug.message_checks.global')) {
    console.log(`"quote mode"`);
    let split = msg.content.split(" ");
    let length = split.length;
    if (length < 7) {
        return;
    }
    let quotes = (Math.round(Math.random() * length)) * 0.5;

    console.log(quotes)
    if (quotes <= 0) {
        quotes = 1;
    }
    console.log(quotes);
    console.log(`split length: ${length} quotes: ${quotes}`);
    let message = split.map((msg) => {
        if ((Math.round(Math.random() * 25) == 4) && quotes > 0) {
            quotes--;
            console.log(quotes);
            return `"${msg}"`;
        }

        return msg;
    });
    msg.channel.send(message.join(' '));
    return;
}

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