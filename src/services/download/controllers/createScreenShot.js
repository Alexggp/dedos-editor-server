const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');
const template = require('./template');

const DIR = './tmp/';


const createScreenShot = async (payload) => {
    
    const output = [];
    for (const [index, ac] of payload.activities.entries()) {
        const fileName = `${DIR}/screenshots/Activity${index+1}-sc.png`;
        await nodeHtmlToImage({
            output: fileName,
            html: template(payload, ac)
        })

        output.push(fileName);
        
    };

    return output
}

module.exports = createScreenShot;