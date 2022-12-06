const { ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const activity = await ActivitiesModel.findById(req.params.id)
    const proyectActivities = await ActivitiesModel.find({projectId: activity.projectId});
    if (proyectActivities.length === 1){
      return res.status(405).send();      
    }
    const deleted = await ActivitiesModel.deleteOne({ _id: req.params.id });
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