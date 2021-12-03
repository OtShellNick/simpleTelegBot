const { khAnsvers } = require('../constants/khAnsvers');

const numQuestion = (ctx) => {
    const {text} = ctx.update.message;

    if(!isNaN(text)) {
        const ansver =  khAnsvers.find(a => a.key === +text);
        ansver ? ctx.reply(ansver.ansver) : ctx.reply('Ответ не найден');
    } else {
        ctx.reply('Введите номер вопроса числом');
    }
}

module.exports = {
    kh(ctx, bot) {
        ctx.reply('Введите номер вопроса викторы КХ');

        bot.on('message', numQuestion);
    }
}