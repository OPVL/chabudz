const { Client, Collection  } = require('discord.js')

class Chabudz extends Client
{
    constructor (options) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
    }

    async loadCommands(dir) {
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
}

module.exports = Chabudz;