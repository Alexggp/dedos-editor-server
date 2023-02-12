const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');
const template = require('./template');

const DIR = './tmp/';


const createMiniature = async (payload) => {
    await fs.mkdirSync(DIR + 'screenshots');

    payload.activities.forEach(async (ac, index) => {
        await nodeHtmlToImage({
            output: `${DIR}/screenshots/Activity${index+1}-sc.png`,
            html: template(payload, ac)
        })
    });
}

module.exports = createMiniature;