const { TokensModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
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
      return res.status(404).send();
    }
    res.send(token);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;
