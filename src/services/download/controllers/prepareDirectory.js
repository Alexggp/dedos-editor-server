const fs = require('fs');

const DIR = './tmp/';
const pdDir = DIR + 'proyect_data/';

const prepareDirectory = async (xml, images, name) => {

    await fs.rmSync(DIR, { recursive: true, force: true });
    if (await !fs.existsSync(DIR)) {
        await fs.mkdirSync(DIR);

    }
    const newDirectory = pdDir + name + '/';
    await fs.mkdirSync(pdDir);
    await fs.mkdirSync(newDirectory);
    await fs.mkdirSync(newDirectory + 'screenshots');
    await fs.mkdirSync(newDirectory + 'contents');
    for (const img of images) {
        await fs.copyFile('./public/' + img, newDirectory + 'contents/' + img, (err) => {
            if (err) throw err;
        });
    };
    const fileName = newDirectory + name + '.xml';
    await fs.writeFileSync(fileName, xml, 'utf-8');
    return newDirectory;
}

module.exports = prepareDirectory;