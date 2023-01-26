const { ActivitiesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{
    const filter = { _id: req.params.id }; 

    const update = {
      zIndexTop: data.zIndexTop
    };
    const activity = await  ActivitiesModel.findOneAndUpdate(filter, update, {
      new: true
    });
    if (!activity) {
      return res.status(404).send();
    }

    res.send(activity);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;