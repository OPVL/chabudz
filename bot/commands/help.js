const config = require('../util/config');

module.exports.run = (client, message) => {

    let commands = client.commands.map((command) => { return { name: command.meta.name, usage: command.meta.usage, aliases: command.meta.aliases } });
    let content = "```" +
    `Command Prefix: ${config('commands.prefix')}\nAvailable Commands: \n${client.commands.map((command) => {
        return `name: ${command.meta.name}, usage: ${command.meta.usage}, aliases: ${command.meta.aliases}`
    }).join('\n')}`

    if (config('triggers.enabled')) {
        content += `\nTriggers:\n${client.triggers.map((trigger) => {
            return `name: ${trigger.meta.name}, description: ${trigger.meta.description}, aliases: ${trigger.meta.aliases}`
        }).join('\n')}`
    }
    if (config('random.enabled')) {
        content += `\nRandom Triggers:\n${client.random.map((trigger) => {
            return `name: ${trigger.meta.name}, description: ${trigger.meta.description}, signature: ${trigger.meta.signature}`
        }).join('\n')}`
    }

    message.channel.send(content + "```");
}

exports.meta = {
    name: 'Help',
    category: 'Support',
    description: "Displays Basic usage information for a given command or lists all available commands",
    usage: 'help <command def: null>',
    signature: 'help',
    aliases: ['h']
}