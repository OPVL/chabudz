const env = require('../util/env');

module.exports = {
    startup_message: env('APP_FEATURE_STARTUP_MESSAGE', true),
    heartbeat: env('APP_FEATURE_HEARTBEAT', true),
}