if (Number(process.version.slice(1).split('.')[0]) < 12) throw new Error('Node 12.0.0 or higher is required. Update Node on your system.')

console.log('start');

require('dotenv').config();

const App = require('./index')
const config = require('./bot/config/config');
const client = new App.Chabudz();

console.log('all required');

const init = () => {
    console.log('logging in');
    client.login(config('app.token'));
}

client.on('ready', () => {
    console.log('ready')
    client.user.setActivity('Kurupt FM', { type: 'LISTENING', url: 'https://kurupt.fm' });

    if (config('app.features.startup_message') < 4) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

console.log('registering messages')
client.on('error', e => { if (config('app.log.level') < 5) console.error(e.stack || JSON.stringify(e) || e.toString()) })
client.on('warn', e => { if (config('app.log.level') < 3) console.warn(e) })
client.on('debug', e => { if (config('app.log.level') < 1) console.debug(e) })

console.log('pre init')
init();

console.log('init start')