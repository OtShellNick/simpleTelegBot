const { Markup} = require('telegraf');

module.exports = {
    main(ctx) {
        return ctx.reply('Welcome', Markup
            .keyboard([
                ['КХ викторина']
            ])
            .oneTime()
            .resize())
    }
}