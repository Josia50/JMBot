const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
const config = require('./src/config.json')
const run  = require("./src/run.json")

app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);


client.on("ready", () => {
    console.log('Main Loaded');
    const welcome = require("./src/welcome.js");
    const role = require("./src/roleadd.js");
    const help = require("./src/help.js");
    const Music = require('./src/musicmain.js')

Music.start(client, {
  youtubeKey: config.youtubeapi
})
})

client.login(run.token);
