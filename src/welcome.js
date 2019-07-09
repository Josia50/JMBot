const discord = require('discord.js');
const client = new discord.Client();
const express = require('express');
const config = require("./config.json")
const run = require("./run.json")

client.on('ready', () => {
    console.log('Welcome/Leave Message enabled!')
})

client.on("guildMemberAdd", (member) =>  {
  member.guild.channels.find("id", config.channelwelcome).send(`${member.user}, Welcome to the IGauntlet server!`); 
  console.log(`${member.user} Joined`);
});

  client.on("guildMemberRemove", (member) => {
    const membertag = member.user.tag
    member.guild.channels.find("id", config.channelwelcome).send(`${membertag} left the server!`);
    console.log(`${member.user} left `);
  });


  client.login(run.token);
               
