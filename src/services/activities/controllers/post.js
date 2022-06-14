const mongoose = require('mongoose');

const { ActivitiesModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('POST - /activities');
  const data = req.body
  try{
    const activity = new ActivitiesModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId
    });
    await activity.save();
    console.log('activities - SAVED');
    res.send(activity)
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;