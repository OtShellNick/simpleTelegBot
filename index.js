const {Telegraf} = require('telegraf');
const { help } = require('./components/help');

const bot = new Telegraf(process.env.TOKEN)
console.log(1)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help(help)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()