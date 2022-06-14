const mongoose = require('mongoose');

const { TokensModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('POST - /tokens');
  const data = req.body
  try{
    const area = new TokensModel({
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
    await area.save();
    console.log('tokens - SAVED');
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
