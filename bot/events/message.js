const config = require('../util/config');

module.exports.run = async (client, message) => {
    if (message.author.bot) return
    if (message.guild && message.guild.available) {
        /* check for autoscans */
    }

    /* validation */
    if (message.content.startsWith(config('commands.prefix')))
        return await require('./command').run(client, message);

}