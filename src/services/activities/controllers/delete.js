const { ActivitiesModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('DELETE - /activities');
  try{
    await ActivitiesModel.deleteOne({ _id: req.params.id });
    console.log('activities - deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;