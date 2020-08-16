import { Message, Channel } from "discord.js";

/**
 * 
 * @param {Channel} channel 
 * @param {string} msg 
 * @param {bool} con_1 
 * @param {bool} con_2 
 */
const message = (channel, msg, con_1 = true, con_2 = true) => {
    if (process.env.APP_TRIGGER_DISABLE_ALL_CHECKS )
    channel.send(msg);
}

const randMessage = (channel, msg, condition) => {
    
    if (process.env.APP_TRIGGER_DISABLE_RANDOM_CHECKS || condition) {
        return channel.send(msg);
    }
}

/**
 * Trigger to send message based on Time condition
 * @param {*} channel 
 * @param {string} msg 
 * @param {boolean} condition 
 */
const timeMessage = (channel, msg, condition) => {
    if (canSend(condition)) {
        return channel.send(msg);
    }
}

/**
 * 
 * @param {boolean} condition 
 */
function canSend(condition) {
    return process.env.APP_TRIGGER_DISABLE_ALL_CHECKS || condition;
}