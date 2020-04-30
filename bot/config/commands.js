const env = require('../util/env');

module.exports = {
    enabled: env('APP_COMMAND_ENABLED', true),
    prefix: env('APP_COMMAND_PREFIX', '|'),

    dir: env('APP_COMMAND_PATH', 'commands'),

    helpful: env('APP_COMMAND_AUTO_HELP_ENABLED', true),
    helpful_type: env('APP_COMMAND_AUTO_HELP_TYPE', 'man|help'),

    /** Commands enabled or disabled */
    cleanup: env('APP_COMMAND_CLEANUP_ENABLED', true),
    help: env('APP_COMMAND_HELP_ENABLED', true),
    uptime: env('APP_COMMAND_UPTIME_ENABLED', true),
}