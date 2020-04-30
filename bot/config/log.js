const env = require('../util/env');

module.exports = {
    level: env('APP_DEBUG_MESSAGE_LEVEL', 5),
}