const fs = require('fs');

const DIR = './tmp/';
const pdDir = DIR + 'proyect_data/';

const prepareDirectory = async (xml, images, name) => {

    await fs.rmSync(DIR, { recursive: true, force: true });
    if (await !fs.existsSync(DIR)) {
        await fs.mkdirSync(DIR);

    }
    await fs.mkdirSync(pdDir);
    await fs.mkdirSync(pdDir + 'screenshots');
    await fs.mkdirSync(pdDir + 'contents');
    for (const img of images) {
        await fs.copyFile('./public/' + img, pdDir + 'contents/' + img, (err) => {
            if (err) throw err;
        });
    };
    const fileName = pdDir + name + '.xml';
    await fs.writeFileSync(fileName, xml, 'utf-8');
}

module.exports = prepareDirectory;