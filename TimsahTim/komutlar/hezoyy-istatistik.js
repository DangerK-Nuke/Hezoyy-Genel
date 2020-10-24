const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let TimsahTim = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/568831784024801316/766964768208191508/9e4b3b366dd52bdb7cf77b02dd6c34ed.png`)
.addField("__**Bot Verileri**__", `<a:760146789877153832:763032006699253800>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:760146789877153832:763032006699253800>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:760146789877153832:763032006699253800>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:760133335447240735:763031713345175554> **Bot Sahibi**  <@550303519530418186> \n **⊹DangerK#9999** \n\n <a:760133335447240735:763031713345175554> **Bot Sahibi**  <@336450004585545729> \n **Zéuss⊹cuK#9999**`)
.addField("__**Sürümler**__", `<a:kumuz:763134316972081242> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:kumuz:763134316972081242> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:760150931169607700:763032009131819038>  **${client.ws.ping}** ms`,true)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/766964485185208320/Hezoyy_Wallpaper.gif`)
.setColor("BLUE")
message.channel.send(TimsahTim)
}

exports.config = {
name: "bot-bilgi",
aliases: ["bot-istatistik","istatistik"]
}