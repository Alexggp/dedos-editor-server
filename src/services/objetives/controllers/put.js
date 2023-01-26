const { ObjetivesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{
    const filter = { _id: req.params.id }; 

    data['_id'] = data['id'];
    delete data['id'];

    const objetive = await  ObjetivesModel.findOneAndUpdate(filter, data, {
      new: true
    });
    if (!objetive) {
      return res.status(404).send();
    }

    res.send(objetive);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;