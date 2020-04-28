const cleanup = require('../commands/cleanup').help
const uptime = require('../commands/uptime').help
const help = require ('../commands/help').help

module.exports = {
    enabled: env('APP_COMMAND_ENABLED', true),
    prefix: env('APP_COMMAND_PREFIX', '|'),

    /** Commands enabled or disabled */
    cleanup: true,
    help: true,
    uptime: true,

    availableCommands: [
        {
            name: cleanup.name,
            description: cleanup.description,
            category: cleanup.category,
            enabled: this.cleanup,
            usage: cleanup.usage,
            signature: cleanup.signature
        },
        {
            name: uptime.name,
            description: uptime.description,
            category: uptime.category,
            enabled: this.uptime,
            usage: uptime.usage,
            signature: uptime.signature
        },
        {
            name: help.name,
            description: help.description,
            category: help.category,
            enabled: this.help,
            usage: help.usage,
            signature: help.signature
        },
    ],
}