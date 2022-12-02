const { AreasModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  console.log('/areas - PUT');
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
      type: data.type,
      offset: data.offset,
      size: data.size,
      background: data.background
    };

    const area = await  AreasModel.findOneAndUpdate(filter, update, {
      new: true
    });
    if (!area) {
      console.log('/areas - Not Found');
      return res.status(404).send();
    }

    console.log('/areas - Updated');
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
