const {Telegraf} = require('telegraf');
const { help } = require('./components/help');
const { kh } = require('./components/kh');

const bot = new Telegraf(process.env.TOKEN)
console.log('Started successfully');
bot.start((ctx) => ctx.reply('Welcome'))
bot.help(help)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.command('kh', ctx => kh(ctx, bot))
bot.launch()