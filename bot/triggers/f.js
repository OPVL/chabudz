exports.meta = {
    name: "Pay Respects",
    description: "Drop an F in chat",
    triggers: [
        "f",
        "eff",
        "F",
        "Eff",
    ],
    example: "Damn, F",
    signature: "payRespects"
}

module.exports.run = (client, message, args) => {
    const regex = /(\s|^)(f|eff)(\s|$|[[:punct:]])/ig;

    while ((m = regex.exec(message.content.valueOf())) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        message.channel.send('F');
        return true;
    }

    client.emit('debug', 'F not properly matched');
    return false;
}