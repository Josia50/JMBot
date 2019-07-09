const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")
const run = require("./run.json")

client.on("message", (message) => {
    var role = message.guild.roles.find("name", "Mod Updates");
    if(message.content == config.prefix + "modrole") {
        message.member.addRole(role);
        message.channel.send(`${message.member} Mod Updates role has been added!`)
    }

    if(message.content == config.prefix + "modrole remove") {
        message.member.removeRole(role);
        message.channel.send(`${message.member} Mod Updates role has been removed!`)
    }
    var spoiler = message.guild.roles.find("name", "spoilers");

    if(message.content == config.prefix + "spoilers") {
        message.member.addRole(spoiler);
        message.channel.send(`${message.member} You can now see spoilers.`)
    }

    if(message.content == config.prefix + "no more spoilers"); {
        message.member.removeRole(spoiler);
        message.channel.send(`${message.member} You will no longer see spoilers.`)
    }
})

client.on('ready', () => {
    console.log('Role Module enabled!')
})

client.login(run.token);
               