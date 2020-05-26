const config = require('../util/config');

module.exports.run = async (client, message) => {
    let matched = client.triggerTriggers.map(getTriggers);
    const total = matched.length;
    let ayo = matched.filter((trigger) => {
        return message.content.search(trigger) >= 0;
    });

    if (!ayo.length > 0) {
        client.emit('debug', `No matches found out of ${total} triggers`);
        return await require('./random').run(client, message);
    }

    console.log(`Trigger matched "${ayo[0]}"`);

    if (executeTrigger(ayo[0], client, message))
        return true;

    return await require('./random').run(client, message);
}

function getTriggers(item, index) {
    return index;
}

const executeTrigger = (trigger, client, message) => {
    let cmd = client.triggers.get(trigger) || client.triggers.get(client.triggerTriggers.get(trigger))

    if (!cmd) return client.debug(`Unable to retrieve action from trigger ${trigger}`);

    if (!config(`triggers.${cmd.meta.signature}`))
        return client.warn(`${cmd.meta.name} is not enabled`);
    ;

    if (!message.guild && cmd.config.guildOnly)
        return client.warn(`${cmd.meta.name} is not allowed outside of a guild`);

    return cmd.run(client, message)
}