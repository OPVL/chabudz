module.exports.run = (client, message, args) => {
    let now = new Date();

    let diff = now - process.startUpTime;

    let unit = args[0] ?? 's';
    console.log(args);

    switch (unit) {
        case 'ms':
            unit = 'millisecond'
        case 's':
            diff = diff / 1000;
            unit = 'second'
            break;
        case 'm':
            diff = diff / 60000;
            unit = 'minute'
            break;
        case 'h':
            diff = diff / 3600000;
            unit = 'hour'
            break;
        case 'd':
            diff = diff / 86400000;
            unit = 'day'
            break;
        case 'w':
            diff = diff / 604800000;
            unit = 'week'
            break;
        case 'y':
            diff = diff / 31557600000;
            unit = 'year'
            break;
    }

    unit = diff < 1 ? `of 1 ${unit}` : `${unit}s`
    diff = diff < 1 ? Math.round((diff + Number.EPSILON) * 100) / 100 : Math.floor(diff);

    return message.channel.send(`Chabudz has been up and about for ${diff} ${unit}`);
}

exports.meta = {
    name: 'Uptime',
    category: 'Support',
    description: "Show current uptime and information",
    usage: 'uptime <unit|format>',
    signature: 'uptime',
    aliases: ['up']
}