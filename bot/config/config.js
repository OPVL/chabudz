/**
 * @param {string} key should be in format eg. 'commands.help'
 * @param {any} def
 */
module.exports = (key, def) => {
    const keys = key.split(".");

    let value = require(`./${keys[0]}`);
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

    value = value ? value : def;
    
    return value;
}