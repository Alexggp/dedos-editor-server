const mongoose = require('mongoose');

const { AreasModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/areas - POST');
  const data = req.body
  try{
    const area = new AreasModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId,
      activityId: data.activityId,
      type: data.type,
      offset: data.offset,
      size: data.size,
      background: data.background
    });
    await area.save();
    console.log('/areas - SAVED');
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
