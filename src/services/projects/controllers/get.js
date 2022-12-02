const {ProjectsModel, ActivitiesModel, AreasModel, TokensModel} = require('../../../database/models/projects.js');

const controller = async (req, res)=>{
  try{
    console.log('/projects - GET');

    const projectId =  req.params.id 
    const filter = { projectId: projectId };

    const project = await ProjectsModel.findById(projectId);
    if(!project) {
      console.log('/projects - Not Found');
      return res.status(404).send();
    }
    const activities = await ActivitiesModel.find(filter);
    const areas = await AreasModel.find(filter);
    const tokens = await TokensModel.find(filter);

    const payload = {
      project: project,
      activities: activities,
      areas: areas,
      tokens: tokens
    }
    console.log('/projects - Found');
    res.send(payload);
  }
  catch (e) {
    console.log(e);
    res.status(404).send();
 }
  
}

module.exports = controller;

