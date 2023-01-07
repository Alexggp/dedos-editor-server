const fs = require('fs');
const DIR = './public/';

const removeFile = async (file) => {

  const path = DIR + file;
  return await fs.promises.unlink(path);
}


const deleteController = async (req, res)=>{

  try{
    await removeFile(req.params.fileName);
    res.send();
  }
  catch (e) {
    if(e.code === 'ENOENT'){
      return res.status(404).send({
        message: "El archivo no existe"
      })
    }
    res.status(500).send();
 }
}

module.exports = { deleteController, removeFile}