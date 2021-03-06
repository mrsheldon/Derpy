exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-varsthor
    if (message.member.permissions.has("MANAGE_MESSAGES") == true) {
      const deleteCount = parseInt(args[0], 10);
    
      if(!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
      
      const fetched = await message.channel.fetchMessages({limit: deleteCount});
      message.channel.bulkDelete(fetched)
        .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }
};
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "purge",
    category: "Moderation",
    description: "Purge amount of messages",
    usage: "purge 2-100"
  };
  