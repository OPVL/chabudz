const log = require('./log');
/**
 * return a key from the environment file with a default if it's not found
 * @param {string} key 
 * @param {any} def the default value if the config key is not
 */
const env = (key, def = null) => {

    let val = process.env[key];

    if (!val || val.length == 0) {
        log.warn(3, `ENV: ${key} was empty?`);
        return def;
    }

    if (isBool(val)) {
        log.debug(1, `ENV: ${key} is bool`);
        return val.toLowerCase() == 'true';
    }

    if (isInt(val)) {
        log.debug(1, `ENV: ${key} is int`);
        return parseInt(val);
    }

    log.debug(1, `ENV: ${key} is string`);

    return val;
}

/**
 * @param {string} val 
 * @returns {boolean}
 */
function isBool(val) {
    val = val.toLowerCase();
    return val == 'true' || val == 'false';
}

/**
 * @param {string} value 
 * @returns {boolean}
 */
function isInt(value) {
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}

module.exports = env;