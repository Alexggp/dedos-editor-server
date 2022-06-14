const { ActivitiesModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/activities - DELETE');
  try{
    const activity = await ActivitiesModel.deleteOne({ _id: req.params.id });
    if (!activity.deletedCount) {
      console.log('/activities - Not Found');
      return res.status(404).send();
    }
    console.log('/activities - Deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;