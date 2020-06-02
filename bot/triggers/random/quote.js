const config = require('../../util/config');

module.exports.run = (client, message, args) => {
    console.log(`"quote mode triggered"`);

    let num = Math.floor(Math.random() * 100);
    let target = Math.floor(Math.random() * 50);
    /**
     * TRUE != || 
     * 
     * 
     */
    if (num != target && !config('random.checks_disabled')) {
        console.log(`${num} != ${target} or ${!config('random.checks_disabled')}`);

        console.log(`global bypass not enabled and nums !=`);

        return false;
    }

    let split = message.content.split(" ");
    console.log(`split ${split}`);
    let length = split.length;
    if (length < 7) {
        return;
    }
    let quotes = Math.round(Math.round(Math.random() * length) * 0.5);

    console.log(quotes)
    if (quotes <= 0) {
        quotes = 1;
    }
    const saved = quotes;
    console.log(`split length: ${length} quotes: ${quotes}`);
    let newMessage = split.map((word) => {
        console.log(`quotes: ${quotes}, word:${word}`);
        const rand = Math.round(Math.random() * quotes);
        console.log(rand);
        if ((Math.round(Math.random() * (quotes * 2)) == 1) && quotes > 0) {
            quotes--;
            console.log(quotes);
            return `"${word}"`;
        }

        return word;
    });
    if (quotes == saved)
        return false;

    message.channel.send(newMessage.join(' '));
    return true;

}

exports.meta = {
    name: "Quote Mode",
    description: "this is stupid",
    example: "Damn I sure do love exercise! => Damn I sure do 'love' exercise!",
    signature: "quote"
}