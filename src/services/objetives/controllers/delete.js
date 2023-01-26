const { ObjetivesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const deleted = await ObjetivesModel.deleteOne({ _id: req.params.id });
    if (!deleted.deletedCount) {
      return res.status(404).send();
    }
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;