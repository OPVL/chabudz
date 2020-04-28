if (Number(process.version.slice(1).split('.')[0]) < 12) throw new Error('Node 12.0.0 or higher is required. Update Node on your system.')

const App = require('./index')

require('dotenv').config();
// const Chabudz = require('./index.js');
const config = require('./bot/config/config');

const client = new App.Chabudz();

const init = () => {
    client.login(config('app.token'));
}

client.on('ready', () => {
    client.user.setActivity('Kurupt FM', { type: 'LISTENING', url: 'https://kurupt.fm' });

    if (config('app.features.startup_message') < 4) {
        console.log(`Logged in as ${client.user.tag}!`);
    }
});

client.on('error', e => { if (config('app.log.level') < 5) console.error(e.stack || JSON.stringify(e) || e.toString()) })
client.on('warn', e => { if (config('app.log.level') < 3) console.warn(e) })
client.on('debug', e => { if (config('app.log.level') < 1) console.debug(e) })

init();