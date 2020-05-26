const { Client, Collection } = require('discord.js')
const config = require('./util/config');
const { promisify } = require('util')
const readdir = promisify(require('fs').readdir)

class Chabudz extends Client {
    constructor(options) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();
        this.triggers = new Collection();
        this.triggerTriggers = new Collection();
        this.random = new Collection();
    }

    loadConfig() {
        return config('app');
    }

    debug(msg) {
        this.emit('debug', msg);
    }

    warn(msg) {
        this.emit('warn', msg);
    }

    async loadCommands() {
        if (!config('commands.enabled')) return;

        let dir = `${__dirname}\\${config('commands.dir')}`
        this.emit('debug', 'loading commands');
        const files = await readdir(dir);
        this.emit('debug', files);
        files.forEach(file => {
            if (!file.endsWith('.js')) return;
            const name = file.split('.')[0];
            this.emit('debug', `CMD: loading command ${name}`);
            try {
                const props = require(`${dir.endsWith('/') ? dir : `${dir}/`}${file}`);

                if (props.init) {
                    props.init(this);
                }
                this.commands.set(props.meta.signature, props);

                if (props.meta.aliases) {
                    props.meta.aliases.forEach((alias) => this.aliases.set(alias, props.meta.signature))
                }
                this.emit('debug', `loaded command ${name}`);
            } catch (e) {
                this.emit('warn', `couldn't load command ${name}\n${e.stack}`)
            }
        });

        this.debug(`Successfully loaded ${this.commands.size} commands`);
    }

    async loadTriggers() {
        if (!config('triggers.enabled')) return;
        let dir = `${__dirname}\\${config('triggers.dir')}`

        this.emit('debug', 'loading triggers');
        const files = await readdir(dir);
        this.emit('debug', files);
        files.forEach(file => {
            if (!file.endsWith('.js')) return;
            const name = file.split('.')[0];
            this.emit('debug', `CMD: loading trigger ${name}`);
            try {
                const props = require(`${dir.endsWith('/') ? dir : `${dir}/`}${file}`);

                if (props.init) {
                    props.init(this);
                }
                this.triggers.set(props.meta.name, props);

                if (props.meta.triggers) {
                    props.meta.triggers.forEach((trigger) => this.triggerTriggers.set(trigger, props.meta.name))
                }
                this.emit('debug', `loaded trigger ${name}`);
            } catch (e) {
                this.emit('warn', `couldn't load trigger ${name}\n${e.stack}`)
            }
        });
        this.debug(`Successfully loaded ${this.triggers.size} triggers`);
    }

    async loadRandom() {
        if (!config('random.enabled')) return;
        let dir = `${__dirname}\\${config('random.dir')}`

        this.emit('debug', 'loading random triggers');
        const files = await readdir(dir);
        this.emit('debug', files);
        files.forEach(file => {
            if (!file.endsWith('.js')) return;
            const name = file.split('.')[0];
            this.emit('debug', `CMD: loading random trigger ${name}`);
            try {
                const props = require(`${dir.endsWith('/') ? dir : `${dir}/`}${file}`);

                if (props.init) {
                    props.init(this);
                }
                this.random.set(props.meta.name, props);

                this.emit('debug', `loaded random trigger ${name}`);
            } catch (e) {
                this.emit('warn', `couldn't load random trigger ${name}\n${e.stack}`)
            }
        });
        this.debug(`Successfully loaded ${this.random.size} random triggers`);
    }
    async phoneHome() {
        if (!config('app.features.heartbeat') || !config('app.key'))
            return;

        // ping home server with device ID and then set trigger to do again in 5-10 minutes
    }
}

module.exports = Chabudz;