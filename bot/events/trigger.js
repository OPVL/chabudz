const config = require('../util/config');

module.exports.run = async (client, message) => {
    let matched = client.triggerTriggers.map(getTriggers);
    const total = matched.length;
    let ayo = matched.filter((trigger) => {
        return message.content.search(trigger) >= 0;
    });

    if (!ayo.length > 0){
        client.emit('debug', `No matches found out of ${total} triggers`);
        return false;
    }

    console.log(`Trigger matched "${ayo[0]}"`);

    return executeTrigger(ayo[0], client, message);
}

function getTriggers(item, index) {
    return index;
}

const executeTrigger = (trigger, client, message) => {
    let cmd = client.triggers.get(trigger) || client.triggers.get(client.triggerTriggers.get(trigger))

	if (!cmd) return client.emit('debug', `Unable to retrieve action from trigger ${trigger}`);

	if (!config(`triggers.${cmd.meta.signature}`)) return message.channel.send(`Encountered an error, The trigger **${cmd.meta.name}** has been disabled.`)
	if (!message.guild && cmd.config.guildOnly) return message.channel.send(`Encountered an error, The command **${cmd.meta.name}** can only be used inside a guild.`)

    cmd.run(client, message)    
}