const { Markup} = require('telegraf');
const {checkItems} = require("./upgradeIrem");

module.exports = {
    main(ctx) {
        setInterval(() => {
            checkItems()
                .then(resp => {
                    if(resp) ctx.reply(resp)
                });
        }, 6000);

        return ctx.reply('Welcome', Markup
            .keyboard([
                ['КХ викторина']
            ])
            .oneTime()
            .resize())
    }
}