const { Client, Collection  } = require('discord.js')
const config = require('./config/config');

class Chabudz extends Client
{
    constructor (options) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
    }

    async loadCommands(dir) {
        if (!config('commands.enabled')) return;
        const files = await readdir(dir);
        files.forEach(file => {
            if (file.endsWith('.js')) return;
            const name = file.split('.')[0];

            try {
                const props = require(`${dir.endsWith('/') ? dir : `${dir}/`}${file}`);
                if (props.init) props.init(this);
                this.commands.set(props.help.name, props);
                if (props.help.aliases) props.help.aliases.forEach((alias) => this.aliases.set(alias, props.help.name))
                this.emit('debug', `loaded command ${name}`);
            } catch (e) {
                this.emit('warn', `couldn't load command ${name}\n${e.stack}`)
            }
        });

    }

    async phoneHome() {
        if (!config('app.features.heartbeat') || !config('app.key'))
            return;
        
        // ping home server with device ID and then set trigger to do again in 5-10 minutes
    }
}

module.exports = Chabudz;