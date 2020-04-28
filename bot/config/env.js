/**
 * return a key from the environment file with a default if it's not found
 * @param {string} key 
 * @param {any} def the default value if the config key is not
 */
const env = (key, def = null) => {

    let val = process.env[key];

    console.log(`Getting ENV_VAR: ${key} AS ${val}`);

    if (!val || val.length == 0) {
        return def;
    }

    if (isBool(val)) {
        if (parseInt(process.env.APP_DEBUG_MESSAGE_LEVEL) < 1) {
            console.log(`key: ${key} is bool`);
        }
        return val.toLowerCase() == 'true';
    }

    if (isInt(val)) {
        if (parseInt(process.env.APP_DEBUG_MESSAGE_LEVEL) < 1) {
            console.log(`key: ${key} is int`);
        }
        return parseInt(val);
    }

    if (parseInt(process.env.APP_DEBUG_MESSAGE_LEVEL) < 1) {
        console.log(`key: ${key} is handled as string`);
    }

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