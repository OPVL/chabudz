/**
 * @param {string} key should be in format eg. 'commands.help'
 * @param {any} def
 */
module.exports = (key, def) => {
    const keys = key.split(".");

    let value = require(`./${keys[0]}`);
    switch (keys.length) {
        case 5:
            return value[keys[1]][keys[2]][keys[3]][keys[4]] ?? def;
            break;
        case 4:
            return value[keys[1]][keys[2]][keys[3]] ?? def;
            break;
        case 3:
            return value[keys[1]][keys[2]] ?? def;
            break;
        case 2:
            return value[keys[1]] ?? def;
            break;
        default:
            return value ?? def;
            break;
    }
}