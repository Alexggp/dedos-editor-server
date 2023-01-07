const { TokensModel } = require('../../../database/models/projects');
const { removeFile } = require('../../files/controllers/delete');


const controller = async (req, res)=>{
  try{
    const token = await TokensModel.findById(req.params.id);
    // removing content images from file system
    if(token?.type === 'img' && token?.content?.urlList?.length){
      token.content.urlList.forEach(async url => {
        const imageUrlParsed = url.split('/');
        const fileName = imageUrlParsed[imageUrlParsed.length-1];
        await removeFile(fileName);
      })
    }
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
    res.status(500).send();
 }
}
module.exports = controller;