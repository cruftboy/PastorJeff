const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.toLowerCase().indexOf("heck") >= 0 || message.toLowerCase().indexOf("fuck") >= 0 || message.toLowerCase().indexOf("shit") >= 0 || message.toLowerCase().indexOf("darn") >= 0 || message.toLowerCase().indexOf("nut") >= 0 || message.toLowerCase().indexOf("anus") >= 0 || message.toLowerCase().indexOf("gosh") >= 0 || message.toLowerCase().indexOf("ass") >= 0 || message.toLowerCase().indexOf("bum") >= 0 || message.toLowerCase().indexOf("butt") >= 0 || message.toLowerCase().indexOf("cunt") >= 0 || message.toLowerCase().indexOf("bitch") >= 0 || message.toLowerCase().indexOf("bastard") >= 0 || message.toLowerCase().indexOf("fart") >= 0 || message.toLowerCase().indexOf("frick") >= 0) {
        bot.sendMessage({
            to: channelID,
            message: 'No swearing on this good christian server!'
        });
    } else if (message.toLowerCase().indexOf("god") >= 0) {
        bot.sendMessage({
            to: channelID,
            message: "Do not say the lord's name in vain!"
        });
    } else if (message.toLowerCase().indexOf("@") >= 0) {
        bot.sendMessage({
            to: channelID,
            message: "I would rather at the lord with my prayers"
        });
    } else if (message.toLowerCase().indexOf("pastor jeff") >= 0) {
        bot.sendMessage({
            to: channelID,
            message: "Hello"
        });
    }
});

client.login(process.env.BOT_TOKEN);