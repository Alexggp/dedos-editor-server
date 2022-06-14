const { TokensModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/areas - PUT');
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

    const token = await  TokensModel.findOneAndUpdate(filter, update, {
      new: true
    });
    if (!token) {
      console.log('/tokens - Not Found');
      return res.status(404).send();
    }
    console.log('tokens - Updated');
    res.send(token);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
