const token = require('./token.js');
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot test is online!');
});

client.on('message', msg => {
    if(msg.content === ';ping') {
        msg.channel.send('Pong!');
    }
});

client.login(token);