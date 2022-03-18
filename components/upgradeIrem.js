const jsdom = require("jsdom");

const {JSDOM} = jsdom;
const url = 'https://pwcats.info/funline/259/262689';
let mainItemsList = [];

const checkItems = () => JSDOM.fromURL(url)
    .then(dom => {
        const arr = [];
        const html = dom.window.document.querySelectorAll('.sell');
        html.forEach(item => arr.push((Number(item.textContent.split(' ').join('')) / 1000000) + 'kk'));

        if (arr.length > mainItemsList.length) mainItemsList = [...arr];
        if (arr.length < mainItemsList.length) {
            let message = '';
            mainItemsList.forEach(item => {
                if (!arr.includes(item)) message += `Продан айтем по цене ${item}\n`;
            });

            mainItemsList = [...arr];

            return message
        }
    });

module.exports = {
    checkItems
}