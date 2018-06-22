const superagent = require("superagent")
const Discord = require('discord.js');

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
        let location = args.slice(1).join(" ");
        if (!location) return message.channel.send(`Please specific location!`)
         superagent.get('https://api.apixu.com/v1/current.json')
        .query({ key: '84f131422a924990b95193229172512'})
        .query({ q: location}) 
        .end((err, res) => {
          if (err) {
            console.log("Error with: d!weather")
          } else {
          const embed = new Discord.RichEmbed();
          embed.setTitle(`Weather In ${res.body.location.name}`)
          .setThumbnail(`http:${res.body.current.condition.icon}`)
          .addField("Name", res.body.location.name, true)
          .addField("Region", res.body.location.region, true)
          .addField("Country", res.body.location.country, true)
          .addField("Local Time", res.body.location.localtime, true)
          .addField("Temperature", `${res.body.current.temp_c}° C | ${res.body.current.temp_f}° F`, true)
          .addField("Feels Like", `${res.body.current.feelslike_c}° C | ${res.body.current.feelslike_f}° F`, true)
          .addField("Wind Speed", `${res.body.current.wind_kph} KP/H | ${res.body.current.wind_mph} MP/H`, true)
          .addField("Wind Degree", `${res.body.current.wind_degree}`, true)
          message.channel.send({embed})
          };
        });    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "weather",
  category: "General",
  description: "Display weather of location",
  usage: "weather location"
};
