  const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const express = require("express");
const app = express();
const moment = require("moment");
const Hezoyy = require("./ayarlar/bot.json"); 
const { Player } = require("discord-player"); 
const db = require('quick.db');

const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";


//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`<a:KralTac:763134356205862912>  Hezoyy | Teşekkürler`, `<a:760133335447240735:763031713345175554>  **Selamlar, Ben DangerK (Slowex'in Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım.**`)
.addField(`<a:Damlalk:763135315903774771> Hezoyy | Nasıl Kullanılır?`, `<a:mzikal:763057353268002816> **Hezoyy Botun Tüm Özelliklerinden Yararlanabilmek İçin Sadece \`${Hezoyy.prefix}yardım\` Yazmanız Yeterlidir.**`)
.addField(`<a:760150931169607700:763032009131819038> Hezoyy | Bağlantılar`, `<a:760136735132352553:763031732680654878> **Sohbet Kanalına s!davet Yazmanız Yeterlidir.**`)
.setFooter(`Hezoyy | Gelişmiş Türkçe Müzik Bot | 2020`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

//----------------------------------------------------------------\\


const player = new Player(client, Hezoyy.youtube_api);
client.player = player;

//----------------------------------------------\\

client.on("message", async message => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || Hezoyy.prefix 
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



fs.readdir("./komutlar/", (err, files) => {
const jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
return console.log("Herhangi Bir Komut Bulunamadı.");
}
jsfiles.forEach(file => {
console.log(`Yüklenen Komut: ${file}`);
const command = require(`./komutlar/${file}`);
client.commands.set(command.config.name, command);
command.config.aliases.forEach(alias => {
client.aliases.set(alias, command.config.name);
});
});
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\


client.login(Hezoyy.TimsahTimtoken)
.then(function() {
console.log('[TimsahTim] Token Doğru, Bot Aktif Ediliyor...')
}, function(err) {
console.log("[Hata] Tokeniniz Yanlış, Bot Aktif Edilemiyor...")
setInterval(function() {
process.exit(0)
}, 20000);
})

//------------------Değişen Oynuyor---------------------------\\

const bot = new Discord.Client();

var oyun = [
`✨ Yardım | h!yardım`,
`🚀 Yeni Komutlar | h!yardım`,
`🔔 Yenilenen Tasarım`,
`⚡️ Hezoyy'u Ekle | h!davet`,
`🌟 Prefix | h!`
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 2 * 5000);
});





//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || Hezoyy.prefix 
  if(msg.content == `<@!762757805672497153>`) return msg.channel.send(`> **Slowex | Prefix**\n\n> <a:hyqued3:763032004584538152> **Sanırım Beni Etiketlediniz.**\n > <a:hyqued3:763032004584538152> Buyurun Prefixim \`${prefix}\``);
});



//---------------------------------------------------\\

//----------------------------------Özel mesaj----------------------------//
const TimsahTim_Yapımcı = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '550303519530418186') return;
  if (TimsahTim_Yapımcı.has(msg.author.id)) {
} else {
 
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/568831784024801316/764425141874589696/Slowex_1.gif")
   .setColor('BLUE')
   .setDescription(`Dur!! Gençler Beni Kodlayan Sayın Yapımcım <@${msg.author.id}> Geldi, Hoşgeldin ${msg.author.username} Reis!`)
 msg.channel.sendEmbed(embed)
 
 TimsahTim_Yapımcı.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   TimsahTim_Yapımcı.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)

//----------------------------------Özel mesaj----------------------------//
const TimsahTim_Yapımcı_2 = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '336450004585545729') return;
  if (TimsahTim_Yapımcı_2.has(msg.author.id)) {
} else {
 
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/568831784024801316/764425141874589696/Slowex_1.gif")
   .setColor('BLUE')
   .setDescription(`Dur!! Gençler Beni Kodlayan Sayın Yapımcım <@${msg.author.id}> Geldi, Hoşgeldin ${msg.author.username} Reis!`)
 msg.channel.sendEmbed(embed)
 
 TimsahTim_Yapımcı_2.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   TimsahTim_Yapımcı_2.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)
//----------------------------------Özel mesaj----------------------------//
 const TimsahTim_Yapımcı_3 = new Set();
client.on("message", async msg => {  
 
  if (msg.author.id !== '693521631699795973') return;
  if (TimsahTim_Yapımcı_3.has(msg.author.id)) {
} else {
 
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username} `, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/568831784024801316/764425141874589696/Slowex_1.gif")
   .setColor('')
   .setDescription(`Dur!! Gençler Beni Kodlayan Sayın Yapımcım <@${msg.author.id}> Geldi, Hoşgeldin ${msg.author.username} Reis!`)
 msg.channel.sendEmbed(embed)
 
 TimsahTim_Yapımcı_3.add(msg.author.id);
 setTimeout(() => {
  //msg.delete();
   // Removes the user from the set after a minute
   TimsahTim_Yapımcı_3.delete(msg.author.id);
 }, 600000);// Şuan 10 dakikadır Değiştirebilirsiniz.
}
  }
)