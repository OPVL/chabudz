const config = require('../util/config');

module.exports.run = (client, message) => {

    let commands = client.commands.map((command) => { return { name: command.meta.name, usage: command.meta.usage, aliases: command.meta.aliases } });
    message.channel.send(
        "```" +
        `Command Prefix: ${config('commands.prefix')}\nAvailable Commands: \n${client.commands.map((command) => {
            return `name: ${command.meta.name}, usage: ${command.meta.usage}, aliases: ${command.meta.aliases}`
        }).join('\n')}` + "```");
}

exports.meta = {
    name: 'Help',
    category: 'Support',
    description: "Displays Basic usage information for a given command or lists all available commands",
    usage: 'help <command def: null>',
    signature: 'help',
    aliases: ['h']
}