const mongoose = require('mongoose');

const { ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{
    const activity = new ActivitiesModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId,
      zIndexTop: 0
    });
    await activity.save();
    res.send(activity)
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;