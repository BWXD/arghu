const Discord = require("discord.js");
var client = new Discord.Client();


client.on("ready", function() {
        client.user.setActivity(`${client.users.size} users`,{type: "WATCHING"});
        client.user.setStatus("dnd")
});

client.login(process.env.TOKEN);
