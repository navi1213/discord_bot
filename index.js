const { token } = require('./config.json')
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
  'intents': [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ]
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  const welcomeMessage = `ようこそ、${member.user.tag}さん！サーバーに参加してくれてありがとう！`;
  member.guild.systemChannel.send(welcomeMessage);
});

client.once(Events.ClientReady, c => {
  console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
  console.log('aaaaaaaa')
  // オンライン状態が変更されたユーザーの情報を取得
  const member = newPresence.member;
  console.log("member" + member)
  console.log("newPresence" + newPresence)
  console.log(newPresence.clientStatus)
  if (newPresence.userId === "394528760470306849") {

    // ユーザーのクライアント情報を取得
    const userStatus = newPresence.clientStatus;

    // ユーザーのクライアント情報をチャンネルに送信
    const statusMessage = `${member.user.username} がオンラインになりました。\n` +
      `desktop: ${userStatus.desktop || 'offline'}\n` +
      `mobile: ${userStatus.mobile || 'offline'}\n` +
      `web: ${userStatus.web || 'offline'}`;
    client.channels.cache.get('1097281712221859941').send(statusMessage);
  }

});

client.login(token);
