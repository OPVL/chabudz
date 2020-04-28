const env = require('./env');

module.exports = {
    token: env('DISCORD_APP_SECRET'),
    environment: env('APP_ENVIRONMENT', 'dev'),
    debug: {
        message_checks: {
            global: env('APP_DEBUG_DISABLE_ALL_CHECKS', false),
            random: env('APP_DEBUG_DISABLE_RANDOM_CHECKS', false),
            time: env('APP_DEBUG_DISABLE_TIME_CHECKS', false),
        }
    },
    log: {
        level: 0,
    },
    features: {
        startup_message: env('APP_FEATURE_STARTUP_MESSAGE', true)
    }
}