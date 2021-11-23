const Discord  = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "continue",
  alias: ["c"],

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel){
    const embed = new MessageEmbed()
    .setDescription(':x: Debes estar en un canal de voz para usar este comando!')
    .setColor("RED")
    .setTitle('ERROR')
    return message.channel.send(embed)
  }

  if(message.guild.me.voice.channel && message.member.voice.channel !== message.guild.me.voice.channel){
    const embed = new MessageEmbed()
    .setDescription(':x: Debes estar en el mismo canal que yo!')
    .setColor("RED")
    .setTitle('ERROR')
    return message.channel.send(embed)
  }

  if(!serverQueue){
    const embed = new MessageEmbed()
    .setDescription(':x: No hay canciones reproduciendose!')
    .setColor("RED")
    .setTitle('ERROR')
    return message.channel.send(embed)
  }

  if (!serverQueue.pause){
    const embed = new MessageEmbed()
    .setDescription(':x: La musica no estaba pausada')
    .setColor("RED")
    .setTitle('ERROR')
    return message.channel.send(embed)
  }

  client.distube.resume(message)
  const embed = new Discord.MessageEmbed()
  .setTitle(':white_check_mark: La cancion fue reanudada con exito')
  .setColor("GREEN")

  message.channel.send(embed)

}

}