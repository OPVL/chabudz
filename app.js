if (Number(process.version.slice(1).split('.')[0]) < 12) throw new Error('Node 12.0.0 or higher is required. Update Node on your system.')

require('dotenv').config();

const App = require('./index')
const config = require('./bot/util/config');
const client = new App.Chabudz();

client.emit('debug', 'Initial Requirements Loaded required');

const init = () => {
    console.log(config('app'));
    client.emit('debug', 'logging in');
    client.login(config('app.token'));

    console.log('C:\\Users\\xxroc\\Documents\\Bots\\Chabuddy\\bot\\commands')
    console.log(`${__dirname}\\bot\\${config('commands.dir')}`);
    client.loadCommands(`${__dirname}\\bot\\${config('commands.dir')}`);
}

client.on('ready', () => {
    client.emit('debug', `Client ready: ${client.user.tag}`);
    client.user.setActivity('Kurupt FM', { type: 'LISTENING', url: 'https://music.youtube.com/watch?v=Mud1HkBvchw&feature=share' });

    if (config('features.startup_message')) {
        console.info(`Logged in as ${client.user.tag}!`);
    }

    process.startUpTime = Date.now();
});

client.emit('debug', 'Registering Listeners');
client.on('error', e => { if (config('app.log.level') < 5) console.error(e.stack || JSON.stringify(e) || e.toString()) })
client.on('warn', e => { if (config('app.log.level') < 3) console.warn(e) })
client.on('debug', e => { if (config('app.log.level') < 1) console.debug(e) })

client.on('message', (message) => { require('./bot/events/message').run(client, message) });

init();
