const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Hezoyy | Bağlantılar`, client.user.avatarURL())
.setDescription('**<a:760133335447240735:763031713345175554> • [ Hezoyy`u Ekleyin ](https://discord.com/oauth2/authorize?client_id=717386782819352647&scope=bot&permissions=805314808)**\n\n**<a:760133335447240735:763031713345175554> • [ Hezoyy Web Sitesi ](https://timsahtim.com/)**\n\n**<a:760133335447240735:763031713345175554> • [ Hezoyy Destek Sunucusu ](https://discord.gg/KYaqshk)**')
.setFooter(`${message.author.username} Tarafından İstendi.`) 
.setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/568831784024801316/766964768208191508/9e4b3b366dd52bdb7cf77b02dd6c34ed.png`)
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };