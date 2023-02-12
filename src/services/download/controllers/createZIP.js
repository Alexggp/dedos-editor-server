const fs = require('fs');
const archiver = require('archiver');
const createMiniature = require('./createMiniatures');

const DIR = './tmp/';

const zipDirectory = (sourceDir, outPath) => {
  const archive = archiver('zip', { zlib: { level: 9 }});
  const stream = fs.createWriteStream(outPath);

  return new Promise((resolve, reject) => {
    archive
      .directory(sourceDir, false)
      .on('error', err => reject(err))
      .pipe(stream)
    ;

    stream.on('close', () => resolve());
    archive.finalize();
  });
}

const createZIP = async (xml, images, name, payload) =>{

  await fs.rmSync(DIR,{ recursive: true, force: true });
  if (await !fs.existsSync(DIR)) {
    await fs.mkdirSync(DIR);
  }
  await fs.mkdirSync(DIR + 'contents');
  images.forEach(async img => {
    await fs.copyFile('./public/'+img, DIR+'contents/'+img, (err) => {
      if (err) throw err;
    });
  });
  await createMiniature(payload);
  const fileName = DIR + name + '.xml';
  const outFile = './public/'+name+'.zip';
  await fs.writeFileSync(fileName, xml, 'utf-8');


  await zipDirectory(DIR, outFile);
  return outFile
}

module.exports = createZIP;