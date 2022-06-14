const mongoose = require('mongoose');

const { ProjectsModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/projects - POST');
  const data = req.body
  try{
    const project = new ProjectsModel({
      _id: new mongoose.Types.ObjectId(),
      userId: data.userId,
      title: data.title
    });
    await project.save();
    console.log('/projects - Saved');
    res.send(project)
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}

module.exports = controller;