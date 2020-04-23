console.log('starting the merc!');
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// event listener on message
client.on('message', msg => {
    console.log(`msg debug: \nmentions: ${msg.mentions}`);
    
    if (msg.content === 'marco') {
        msg.channel.send('polo');
    }

    if (msg.content.search(/peanut/i)) {
        // msg.channel.send("https://youtu.be/x6XGzq-Afrg?t=52");
    }

    if (msg.content.startsWith('morning') && msg.mentions) {
        console.log(msg.mentions);
        console.log(msg.mentions.users.first());
    }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

client.login(process.env.DISCORD_APP_SECRET);