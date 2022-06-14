const { AreasModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/areas - DELETE');
  try{
    const area = await AreasModel.deleteOne({ _id: req.params.id });
    if (!area.deletedCount) {
      console.log('/areas - Not Found');
      return res.status(404).send();
    }
    res.send()
  }
  catch (e) {
    console.log(e);
 }
}
module.exports = controller;