const fs = require('fs');
const nodeHtmlToImage = require('node-html-to-image');
const template = require('./template');

const DIR = './tmp/';
const pdDir = DIR + 'proyect_data/';


const createScreenShot = async (payload) => {
    
    const output = [];
    for (const [index, ac] of payload.activities.entries()) {
        const fileName = `${pdDir}/screenshots/Activity${index+1}-sc.png`;
        await nodeHtmlToImage({
            output: fileName,
            html: template(payload, ac)
        })

        output.push(fileName);
        
    };

    return output
}

module.exports = createScreenShot;