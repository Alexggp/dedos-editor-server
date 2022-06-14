const { TokensModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('DELETE - /tokens');
  try{
    await TokensModel.deleteOne({ _id: req.params.id });
    console.log('tokens - deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;