const {ProjectsModel, ActivitiesModel, AreasModel, TokensModel, ObjetivesModel} = require('../../../database/models/projects.js');

const controller = async (req, res)=>{
  try{

    const projectId =  req.params.id 
    const filter = { projectId: projectId };

    const project = await ProjectsModel.findById(projectId);
    if(!project) {
      return res.status(404).send();
    }
    const activities = await ActivitiesModel.find(filter);
    const areas = await AreasModel.find(filter);
    const tokens = await TokensModel.find(filter);
    const objetives = await ObjetivesModel.find(filter);


    const payload = {
      project,
      activities,
      areas,
      tokens,
      objetives
    }
    res.send(payload);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
  
}

module.exports = controller;

