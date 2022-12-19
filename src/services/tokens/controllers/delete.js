const { TokensModel, ObjetivesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const token = await TokensModel.deleteOne({ _id: req.params.id });
    if (!token.deletedCount) {
      return res.status(404).send();
    }

    // Deleting attached objetives
    const filter = { $or: [{origin: req.params.id}, {target: req.params.id}]};
    await ObjetivesModel.deleteMany(filter);

    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;