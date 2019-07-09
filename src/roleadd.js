const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")
const run = require("./run.json")

client.on("message", (message) => {
    var role = message.guild.roles.find("name", "Mod-Updates");
    if(message.content == config.prefix + "modrole") {
        message.member.addRole(role);
        message.channel.send(`${message.member} Mod Updates role has been added!`)
    }

    if(message.content == config.prefix + "modrole remove") {
        message.member.removeRole(role);
        message.channel.send(`${message.member} Mod Updates role has been removed!`)
    }
})

client.on('ready', () => {
    console.log('Role enabled!')
})

client.login(run.token);
               