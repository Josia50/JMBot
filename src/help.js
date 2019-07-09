const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")
const run = require("./run.json")

client.on("message", (message) => {
    var role = message.guild.roles.find("name", "Mod-Updates");
    if(message.content == config.prefix + "help") {
        var hembed = new discord.RichEmbed;

        hembed.setTitle("Help Command")
        .addField("+modrole", "Will add the Mod-Updates role to you!")
        .addField("+modrole remove", "Will remove the Mod-Updates role from you!")
        .addField("+spoilers", "Will give you the Spoilers role.")
        .addField("+no more spoilers", "Will remove the Spoilers role.")
    

        message.channel.send(hembed);

    }

})

  

client.on('ready', () => {
    console.log('Help Message enabled!')
})

client.login(run.token);
               