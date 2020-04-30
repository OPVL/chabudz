module.exports = {
    debug: (level, msg) => {
        if (!process.appConf || process.appConf.log.level < level) {
            console.debug(msg);
        }
    },
    
    warn: (level, msg) =>  {
        if (!process.appConf || process.appConf.log.level < level) {
            console.warn(msg);
        }
    }
}