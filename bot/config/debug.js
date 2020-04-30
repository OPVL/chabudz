const env = require('../util/env');

module.exports = {
    global_checks: env('APP_ENVIRONMENT', 'live') === 'dev' && env('APP_DEBUG_DISABLE_GLOBAL_CHECKS', false),
    random_checks: env('APP_DEBUG_DISABLE_RANDOM_CHECKS', false),
    time_checks: env('APP_DEBUG_DISABLE_TIME_CHECKS', false),
}