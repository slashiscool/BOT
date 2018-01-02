const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function () {
    console.log("redi ;)");

});

bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;

    switch (message.content) {

        case "hey":
            message.channel.sendMessage("Hey there");
            break;
        case "how are you":
            message.channel.sendMessage("I'm fine");
            break;
        case "nigga":
            message.channel.sendMessage("don't say that! \n You can say N word instead");
            break;
        case "fuck":
            message.channel.sendMessage("don't say that! \n You can say 'i love you' instead");
            break;
        case "שחור":
            message.channel.sendMessage("אנא תקן לחום בבקשה");
            break;
        case "שתוק":
            message.channel.sendMessage("שימשיך לדבר");
            break;
        case "כנס":
            message.channel.sendMessage("תן לו כמה דקות בבקשה.");
            break;
        case "כושי":
            message.channel.sendMessage("כושי מטוטמטם אתה מתכוון....");
            break;
            case "whats up":
            message.channel.sendMessage("actually bad");
            break;
            case "whats happend":
            message.channel.sendMessage("dont even ask");
            case "but it intresting":
            message.channel.sendMessage("i dont care");
            break;
           
            default:
            message.channel.sendMessage("i really dont know what to say ;(");
            break;

    }
});

bot.login('Mzk3ODI0NDc3NzgzNzg1NDgy.DS1mdQ.EKOFBstnD7a3BeSibR_R22IAMSk');

