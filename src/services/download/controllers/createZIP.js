const fs = require('fs');
const archiver = require('archiver');

const DIR = './tmp/';
const pdDir = DIR + 'proyect_data/';

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

const createZIP = async (name) =>{
  const outFile = DIR+name+'.zip';
  await zipDirectory(pdDir, outFile);
  return outFile
}

module.exports = createZIP;