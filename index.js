// discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
const { Client, Events, GatewayIntentBits } = require('discord.js');

// 設定ファイルからトークン情報を呼び出し、変数に保存します
const { token } = require('./config.json');

// クライアントインスタンスと呼ばれるオブジェクトを作成します
const client = new Client({
  'intents': [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  ]
});

// クライアントオブジェクトが準備OKとなったとき一度だけ実行されます
client.once(Events.ClientReady, c => {
        console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

const userIds = ['394528760470306849', '197687062894346240'];

client.on('presenceUpdate', (oldPresence, newPresence) => {
  const member = newPresence.member;
  const userStatus = newPresence.clientStatus;

  if (!userStatus || !userStatus.mobile) {
    return;
  }

  const userId = member.user.id;
  // 特定のチャンネルのIDを指定する
   // discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
   const { Client, Events, GatewayIntentBits } = require('discord.js');

   // 設定ファイルからトークン情報を呼び出し、変数に保存します
   const { token } = require('./config.json');

   // クライアントインスタンスと呼ばれるオブジェクトを作成します
   const client = new Client({
     'intents': [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
     GatewayIntentBits.MessageContent,
     GatewayIntentBits.GUILD_PRESENCES                                                                              ]
 });  const channelId = '1097277510259060968';
 const channel = member.guild.channels.cache.get(channelId);

  if (userIds.includes(userId)) {
    const message = `${member.user.username} が こそこそ携帯でのぞいてるよ！`;
    const systemChannel = member.guild.channels.cache.get('1097281712221859941');

    if (systemChannel) {
      systemChannel.send(message);
    }
  }
});
// ログインします
client.login(token);