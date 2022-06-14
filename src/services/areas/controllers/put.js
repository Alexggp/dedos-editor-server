const { AreasModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('PUT - /areas');
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
      projectId: data.projectId,
      activityId: data.activityId,
      type: data.type,
      offset: data.offset,
      size: data.size,
      background: data.background
    };

    const area = await  AreasModel.findOneAndUpdate(filter, update, {
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
