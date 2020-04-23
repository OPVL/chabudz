console.log('starting the merc!');
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const greeting = require('./src/functions/greeting');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// event listener on message
client.on('message', msg => {
    console.log(`msg debug: \nmentions: ${msg.mentions}`);
    
    if (msg.content === 'marco') {
        msg.channel.send('polo');
    }

    if (msg.content.includes('peanut')) {
        msg.channel.send("https://youtu.be/x6XGzq-Afrg?t=52");
    }
    
    if (msg.content.includes('excercise') || msg.content.includes('fit')) {

        let gifs = [
            '5w2hYvUDpaJaXMofhf',
            'xkhE54JlWjRNYXCYbu',
            'wKdnwYxVbXpwXZ99NI',
            '35Koksb9GwsifYhu9Q',
            '2wXstu3OO7EXqHhwgA',
            'pslSsRVsraewaPzGbx',
            'X8VxdpqWMqbTNQs2RY',
            '1Ajo7ORbVdheMjfLjq',
            'Ojr8CstK9rP8xcS9Ek'
        ];

        let gif = gifs[Math.floor(Math.random()*gifs.length)];
        msg.channel.send(`https://media.giphy.com/media/${gif}/giphy.gif`);
    }

    // TODO: 
    // wrap random and time checks in function that you can pass in to as callbacks. 
    // Checks env var, if env var is disabled the return result of callback
    if (msg.content.startsWith('hello') && (Math.round(Math.random() * 100) == 69 || process.env.APP_TRIGGER_DISABLE_RANDOM_CHECKS)) {
        msg.channel.send(greeting());
    }

    if (msg.content.includes('act natural')) {
        msg.channel.send('https://media.giphy.com/media/xTeWOxUNxVWGeOW2wE/giphy.gif');
    }

    if (msg.content.startsWith('morning') && msg.mentions) {
        if (msg.mentions.users.first() == client.user && new Date().getHours < 12) {
            msg.channel.send('jhdsfjhsdjfhsjdh');
        }
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