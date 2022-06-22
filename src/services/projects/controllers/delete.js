const {ProjectsModel, ActivitiesModel, AreasModel, TokensModel} = require('../../../database/models.js');


const controller = async (req, res)=>{
  console.log('/projects - DELETE');
  try{
    const projectId =  req.params.id 
    const filter = { projectId: projectId };

    const project = await ProjectsModel.deleteOne({ _id: projectId });
    if (!project.deletedCount) {
      console.log('/projects - Not Found');
      return res.status(404).send();
    }

    await ActivitiesModel.deleteMany(filter);
    await AreasModel.deleteMany(filter);
    await TokensModel.deleteMany(filter);

    console.log('/projects - Deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
 }
}
module.exports = controller;