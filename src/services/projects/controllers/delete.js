const {ProjectsModel, ActivitiesModel, AreasModel, TokensModel} = require('../../../database/models/projects.js');


const controller = async (req, res)=>{
  try{
    const projectId =  req.params.id 
    const filter = { projectId: projectId };

    const project = await ProjectsModel.deleteOne({ _id: projectId });
    if (!project.deletedCount) {
      return res.status(404).send();
    }

    await ActivitiesModel.deleteMany(filter);
    await AreasModel.deleteMany(filter);
    await TokensModel.deleteMany(filter);
    res.send()
  }
  catch (e) {
    console.log(e);
    return res.status(500).send();
 }
}
module.exports = controller;