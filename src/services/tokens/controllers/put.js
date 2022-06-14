const { TokensModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('PUT - /areas');
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
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
    };

    const area = await  TokensModel.findOneAndUpdate(filter, update, {
      new: true
    });
    console.log('areas - UPDATED');
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
