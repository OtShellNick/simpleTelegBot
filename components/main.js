const { Markup} = require('telegraf');
const {checkItems} = require("./upgradeIrem");

module.exports = {
    main(ctx) {
        setInterval(() => {
            checkItems(ctx);
        }, 60000);

        return ctx.reply('Welcome', Markup
            .keyboard([
                ['КХ викторина']
            ])
            .oneTime()
            .resize())
    }
}