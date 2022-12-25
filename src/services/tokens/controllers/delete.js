const { TokensModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  try{
    const token = await TokensModel.deleteOne({ _id: req.params.id });
    if (!token.deletedCount) {
      return res.status(404).send();
    }
    res.send()
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;