const config = require('../util/config');

module.exports.run = (client, message) => {

    console.log(client.random);

    client.random.forEach(rTrigger => {
        if (config(`random.${rTrigger.meta.signature}`)
            && rTrigger.run(client, message)){
                console.log(`${rTrigger.meta.name} was executed successfully`);
            return;
            }
    });
}