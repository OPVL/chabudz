const env = require('../util/env');

module.exports = {
    enabled: env('APP_TRIGGER_ENABLED', true),

    dir: env('APP_TRIGGER_PATH', 'triggers'),

    /** Commands enabled or disabled */
    exercise: env('APP_TRIGGER_EXERCISE_ENABLED', true),
    greeting: env('APP_TRIGGER_GREETING_ENABLED', true),
    uptime: env('APP_COMMAND_UPTIME_ENABLED', true),
    payRespects: env('APP_TRIGGER_PAY_RESPECTS_ENABLED', true),
}