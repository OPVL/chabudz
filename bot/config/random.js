const env = require('../util/env');

module.exports = {
    enabled: env('APP_RANDOM_ENABLED', true),

    dir: env('APP_RANDOM_PATH', 'triggers/random'),

    /** Ignores random checks for testing, default enables checks */
    checks_disabled: env('APP_RANDOM_CHECKS_DISABLED', false),

    /** Commands enabled or disabled */
    quote: env('APP_RANDOM_QUOTE_ENABLED', true),
}