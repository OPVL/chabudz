const env = require('../util/env');

module.exports = {
    token: env('DISCORD_APP_SECRET'),
    key: env('APP_KEY'),
    environment: env('APP_ENVIRONMENT', 'dev'),
    version: env('APP_VERSION', 'undefined'),
    debug: require('./debug'),
    log: require('./log'),
    features: require('./features'),
    commands: require('./commands'),
}