const fs = require('fs');
const archiver = require('archiver');
const createMiniature = require('./createScreenShot');

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

const createZIP = async (name) =>{
  const outFile = './public/'+name+'.zip';
  await zipDirectory(DIR, outFile);
  return outFile
}

module.exports = createZIP;