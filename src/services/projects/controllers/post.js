const mongoose = require('mongoose');

const { ProjectsModel, ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{

    // Creating a new project
    const userId =  res.locals.user;
    const project = new ProjectsModel({
      _id: new mongoose.Types.ObjectId(),
      userId: userId,
      title: data.title,
      description: data.description,
      screenResolution: data.screenResolution
    });
    await project.save();

    // Creating the first activity inside the project
    const activity = new ActivitiesModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: project._id
    });
    await activity.save();
    
    res.send(project)
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}

module.exports = controller;