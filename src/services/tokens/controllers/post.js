const mongoose = require('mongoose');

const { TokensModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{
    const token = new TokensModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId,
      activityId: data.activityId,
      areaId: data.areaId,
      type: data.type,
      offset: data.offset,
      screenOffset: data.screenOffset,
      size: data.size,
      numValue: data.numValue,
      clickable: data.clickable,
      rotatable: data.rotatable,
      resizable: data.resizable,
      movable: data.movable,
      feedback: data.feedback,
      content: data.content
    });
    await token.save();
    res.send(token);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;
