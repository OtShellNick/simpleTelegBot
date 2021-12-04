const {Telegraf} = require('telegraf');
const { help } = require('./components/help');
const { kh } = require('./components/kh');
const { main } = require('./components/main');

const bot = new Telegraf(process.env.TOKEN)
console.log('Started successfully');
bot.start(main)
bot.help(help)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('КХ викторина', ctx => kh(ctx, bot))
bot.launch(main)