
module.exports.run = (client, msg) => {
    if (!msg.guild || !msg.guild.available) console.log('Guild Unavailable'); return;

    const clientM = msg.guild.member(client.user)
    const member = msg.guild.member(msg.author)

    if (!clientM.permissionsIn(msg.channel).has(8192, true)) {
        const noPerms = `I lack permissions to delete messages in \`#${msg.channel.name}\`\nIf you believe this is incorrect, please check the channels permissions and allow CommandCleanup to \`MANAGE MESSAGES\` and \`READ MESSAGE HISTORY\`.`
        return msg.channel.sendToUser(msg.author, `Insufficient permissions,`, { embed: { color: 'ff0000', description: noPerms }, delete: 5000, reply: message.author })
    }
    let messages = msg.channel;

    console.log(messages.length);
    return;
    let limit = 10;
    let deleted = 0;
    let user = null;
    messages.forEach(msg => {
        if (deleted >= limit)
            return;

        if (!user || msg.author.id === user) {
            msg.delete();
            deleted++;
        }
    });
}

exports.help = {
    name: 'Cleanup',
    category: 'Moderation',
    description: "Used to mass-clean messages from a text channel, you can also use parameters to target certain messages based on their content.",
    usage: 'cleanup <number def: 25> <user def: all>',
    signature: 'cleanup',
    aliases: ['clean'],
}