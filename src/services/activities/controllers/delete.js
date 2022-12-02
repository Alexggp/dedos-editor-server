const { ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  console.log('/activities - DELETE');
  try{
    const activity = await ActivitiesModel.findById(req.params.id)
    const proyectActivities = await ActivitiesModel.find({projectId: activity.projectId});
    if (proyectActivities.length === 1){
      console.log('/activities - Method Not Allowed');
      return res.status(405).send();      
    }
    const deleted = await ActivitiesModel.deleteOne({ _id: req.params.id });
    if (!deleted.deletedCount) {
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