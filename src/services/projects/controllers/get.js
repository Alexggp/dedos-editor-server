const {ProjectsModel} = require('../../../database/models/projects.js');

const controller = async (req, res)=>{
  try{

    const userId =  res.locals.user;
    const filter = { userId: userId };

    const projects = await ProjectsModel.find(filter);
    if(!projects) {
      return res.status(404).send();
    }
  
    res.send(projects);
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
  
}

module.exports = controller;

