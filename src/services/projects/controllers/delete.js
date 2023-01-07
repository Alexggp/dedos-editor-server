const { ProjectsModel, ActivitiesModel, AreasModel, TokensModel, ObjetivesModel, FilesModel } = require('../../../database/models/projects.js');
const { removeFiles } = require('../../files/controllers/delete');

const controller = async (req, res) => {
  try {
    const projectId = req.params.id;
    const filter = { projectId: projectId };

    const files = await FilesModel.find(filter);
    await removeFiles(files);

    const project = await ProjectsModel.deleteOne({ _id: projectId });
    if (!project.deletedCount) {
      return res.status(404).send();
    }

    await ActivitiesModel.deleteMany(filter);
    await AreasModel.deleteMany(filter);
    await TokensModel.deleteMany(filter);
    await ObjetivesModel.deleteMany(filter);

    res.send()
  }
  catch (e) {
    console.log(e);
    return res.status(500).send();
  }
}
module.exports = controller;