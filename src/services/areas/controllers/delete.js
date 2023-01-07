const { AreasModel } = require('../../../database/models/projects');
const { removeFile } = require('../../files/controllers/delete');

const controller = async (req, res)=>{
  try{
    const area = await AreasModel.findById(req.params.id);
    // removing background image from file system
    if (area?.background) {
      const imageUrlParsed = area.background.split('/');
      const fileName = imageUrlParsed[imageUrlParsed.length-1];
      await removeFile(fileName);
    }
    const deleted = await AreasModel.deleteOne({ _id: req.params.id });
    if (!deleted.deletedCount) {
      return res.status(404).send();
    }
    res.send();
  }
  catch (e) {
    if(e.code === 'ENOENT'){
      return res.status(404).send({
        message: "El archivo no existe"
      })
    }
    return res.status(500).send();
 }
}
module.exports = controller;