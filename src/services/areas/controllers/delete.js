const { AreasModel, ObjetivesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const area = await AreasModel.deleteOne({ _id: req.params.id });
    if (!area.deletedCount) {
      return res.status(404).send();
    }

    // Deleting attached objetives
    const filter = { $or: [{origin: req.params.id}, {target: req.params.id}]};
    await ObjetivesModel.deleteMany(filter);

    res.send();
  }
  catch (e) {
    console.log(e);
    return res.status(500).send();
 }
}
module.exports = controller;