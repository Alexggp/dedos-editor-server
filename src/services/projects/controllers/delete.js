const { ProjectsModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('DELETE - /projects');
  try{
    await ProjectsModel.deleteOne({ _id: req.params.id });
    console.log('projects - deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
 }
}
module.exports = controller;