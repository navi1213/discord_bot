const Discord = require('discord.js');
const client = new Discord.Client({
  intents: ["GUILD_PRESENCES", "GUILDS", "GUILD_MESSAGES"]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const welcomeMessage = `ようこそ、${member.user.tag}さん！サーバーに参加してくれてありがとう！`;
  member.guild.systemChannel.send(welcomeMessage);
});

client.on('message', message => {
  if (!message.guild) {
    return message.channel.send('サーバー内で実行してください。');
  }

  if (message.content === '!status') {
    const userStatus = message.member.presence.clientStatus;

    if (!userStatus) {
      return message.channel.send('どのデバイスからもアクセスされていません。');
    }

    message.channel.send(
      [
        'desktop: ' + (userStatus.desktop || 'offline'),
        'mobile: ' + (userStatus.mobile || 'offline'),
        'web: ' + (userStatus.web || 'offline'),
      ].join('\n')
    );
  }
});

client.on('messageCreate', message => {
  if (message.content === 'hello') {
    message.channel.send('Hi there!');
  }
});


client.login(process.env.DISCORD_BOT_TOKEN);