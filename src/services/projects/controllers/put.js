const { ProjectsModel } = require('../../../database/models');


const controller = async (req, res)=>{
  console.log('PUT - /projects');
  const data = req.body
  try{

    const filter = { _id: req.params.id };

    const update = {
      userId: data.userId,
      title: data.title
    };

    const area = await  ProjectsModel.findOneAndUpdate(filter, update, {
      new: true
    });
    console.log('projects - UPDATED');
    res.send(area);
  }
  catch (e) {
    console.log(e);
    res.status(400).send();
 }
}
module.exports = controller;
