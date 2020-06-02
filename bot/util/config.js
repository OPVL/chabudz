const log = require('./log');

/**
 * @param {string} key should be in format eg. 'commands.help'
 * @param {any} def
 */
module.exports = (key, def = null) => {
    const keys = key.split(".");

    let value = getConfItem(keys, def);
    log.debug(1, `CONF: ${key} => ${value}`);
    return value;
}

/**
 * 
 * @param {array} keys 
 * @param {any} def 
 */
function getConfItem(keys, def) {
    let value = require(`../config/${keys[0]}`);
    switch (keys.length) {
        case 5:
            value = value[keys[1]][keys[2]][keys[3]][keys[4]];
            break;
        case 4:
            value = value[keys[1]][keys[2]][keys[3]];
            break;
        case 3:
            value = value[keys[1]][keys[2]];
            break;
        case 2:
            value = value[keys[1]];
            break;
    }

    value = value || def;
    return value;
}
