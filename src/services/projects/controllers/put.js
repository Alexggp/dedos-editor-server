const { ProjectsModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  console.log('/projects - PUT');
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
      title: data.title,
      description: data.description,
      screenResolution: data.screenResolution
    };

    const project = await  ProjectsModel.findOneAndUpdate(filter, update, {
      new: true
    });
    if (!project) {
      console.log('/projects - Not Found');
      return res.status(404).send();
    }
    console.log('/projects - Updated');
    res.send(project);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
