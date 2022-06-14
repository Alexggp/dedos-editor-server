const { AreasModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('DELETE - /areas');
  try{
    await AreasModel.deleteOne({ _id: req.params.id });
    console.log('areas - deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
 }
}
module.exports = controller;