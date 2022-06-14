import {ProjectsModel, ActivitiesModel, AreasModel, TokensModel} from '../../../database/models.js';

const controller = async (req, res)=>{
  const projectId = req.params.id.toLowerCase()
  try{
    const project = await ProjectsModel.find({projectId:projectId});
    const activities = await ActivitiesModel.find({projectId:projectId});
    const areas = await AreasModel.find({projectId:projectId});
    const tokens = await TokensModel.find({projectId:projectId});

    const payload = {
      project: project[0],
      activities: activities[0],
      areas: areas[0],
      tokens: tokens[0]
    }
    res.send(payload);
  }
  catch (e) {
    console.log(e);
    res.status(404).send();
 }
  
}

export default controller;

