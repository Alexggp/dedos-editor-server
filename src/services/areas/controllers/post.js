const mongoose = require('mongoose');

const { AreasModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
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
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;
