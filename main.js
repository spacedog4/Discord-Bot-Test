const token = require('./token.js');
const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot shutup patrick is online!');
});

client.on('message', msg => {
    if(msg.author.id === '276843468981272587') {
        msg.reply('cala a boca patrick');
    }
});

client.login(token);