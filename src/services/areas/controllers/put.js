const { AreasModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
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
      return res.status(404).send();
    }

    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;
