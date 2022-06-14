const { ProjectsModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('/projects - DELETE');
  try{
    const project = await ProjectsModel.deleteOne({ _id: req.params.id });
    if (!project.deletedCount) {
      console.log('/projects - Not Found');
      return res.status(404).send();
    }
    console.log('/projects - Deleted');
    res.send()
  }
  catch (e) {
    console.log(e);
 }
}
module.exports = controller;