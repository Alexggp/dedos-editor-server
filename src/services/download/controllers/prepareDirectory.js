const fs = require('fs');

const DIR = './tmp/';

const prepareDirectory = async (xml, images, name) => {

    await fs.rmSync(DIR, { recursive: true, force: true });
    if (await !fs.existsSync(DIR)) {
        await fs.mkdirSync(DIR);
    }
    await fs.mkdirSync(DIR + 'screenshots');
    await fs.mkdirSync(DIR + 'contents');
    for (const img of images) {
        await fs.copyFile('./public/' + img, DIR + 'contents/' + img, (err) => {
            if (err) throw err;
        });
    };
    const fileName = DIR + name + '.xml';
    await fs.writeFileSync(fileName, xml, 'utf-8');
}

module.exports = prepareDirectory;