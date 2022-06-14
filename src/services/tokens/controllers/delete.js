const { TokensModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/tokens - DELETE');
  try{
    const token = await TokensModel.deleteOne({ _id: req.params.id });
    if (!token.deletedCount) {
      console.log('/tokens - Not Found');
      return res.status(404).send();
    }
    console.log('/tokens - Deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;