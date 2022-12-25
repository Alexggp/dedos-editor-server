const { AreasModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const area = await AreasModel.deleteOne({ _id: req.params.id });
    if (!area.deletedCount) {
      return res.status(404).send();
    }
    res.send();
  }
  catch (e) {
    console.log(e);
    return res.status(500).send();
 }
}
module.exports = controller;