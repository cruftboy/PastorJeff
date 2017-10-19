var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
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
    }
});