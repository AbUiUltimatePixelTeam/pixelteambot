const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "p!";

bot.login(process.env.TOKEN);

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            var embed = new Discord.RichEmbed()
                .setDescription("Aucune commande disponible pour le moment")
                .setColor(0x00FFF)
            message.channel.send(embed);
            break
        case "myavatar":
            message.reply(message.author.avatarURL);
            break
        default:
            message.channel.sendMessage("**Commande invalide.**")
    }
});

bot.on("message", message => {
    console.log('message')
});
