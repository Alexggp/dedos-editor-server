const { TokensModel, FilesModel } = require('../../../database/models/projects');
const { removeFiles } = require('../../files/controllers/delete');


const controller = async (req, res)=>{
  try{
    const files = await FilesModel.find({containerId: req.params.id});
    await removeFiles(files);
    const deleted = await TokensModel.deleteOne({ _id: req.params.id });
    if (!deleted.deletedCount) {
      return res.status(404).send();
    }
    res.send()
  }
  catch (e) {
    if(e.code === 'ENOENT'){
      return res.status(404).send({
        message: "El archivo no existe"
      })
    }
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;