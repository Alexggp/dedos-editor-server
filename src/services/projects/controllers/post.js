const mongoose = require('mongoose');

const { ProjectsModel, ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  console.log('/projects - POST');
  const data = req.body
  try{

    // Creating a new project
    const project = new ProjectsModel({
      _id: new mongoose.Types.ObjectId(),
      userId: data.userId,
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
    
    console.log('/projects - Saved');
    res.send(project)
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}

module.exports = controller;