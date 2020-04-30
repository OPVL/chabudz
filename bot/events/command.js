const config = require('../util/config');

module.exports.run = async (client, message) => {
    const args = message.content.slice(config('commands.prefix').length).trim().split(/\s+/g)
	const command = args.shift().toLowerCase()

	let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
	if (!cmd) return client.emit('debug', `command ${command} doesn't exist`)

	if (!config(`commands.${cmd.meta.signature}`)) return message.channel.send(`Encountered an error, The command **${cmd.meta.name}** has been disabled.`)
	if (!message.guild && cmd.config.guildOnly) return message.channel.send(`Encountered an error, The command **${cmd.meta.name}** can only be used inside a guild.`)
	
	await cmd.run(client, message, args)
	// if (message.deletable) message.delete(0)
}