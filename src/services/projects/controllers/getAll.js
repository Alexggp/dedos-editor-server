const {ProjectsModel} = require('../../../database/models/projects.js');

const controller = async (req, res)=>{
  try{
    console.log('/projects/user - GET');

    const userId =  req.params.id 
    const filter = { userId: userId };

    const projects = await ProjectsModel.find(filter);
    if(!projects) {
      console.log('/projects/user - Not Found');
      return res.status(404).send();
    }
  
    console.log('/projects/user - Found');
    res.send(projects);
  }
  catch (e) {
    console.log(e);
    res.status(404).send();
 }
  
}

module.exports = controller;

