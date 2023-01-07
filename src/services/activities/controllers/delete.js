const { ActivitiesModel, AreasModel, TokensModel, ObjetivesModel, FilesModel } = require('../../../database/models/projects');
const { removeFiles } = require('../../files/controllers/delete');

const controller = async (req, res) => {
  try {
    const activity = await ActivitiesModel.findById(req.params.id)
    const proyectActivities = await ActivitiesModel.find({ projectId: activity.projectId });
    if (proyectActivities.length === 1) {
      return res.status(405).send({
        message: 'El proyecto no puede quedar vacío'
      });
    }
    const files = await FilesModel.find({ activityId: req.params.id });
    await removeFiles(files);
    const deleted = await ActivitiesModel.deleteOne({ _id: req.params.id });
    if (!deleted.deletedCount) {
      return res.status(404).send();
    }
    const filter = { activityId: req.params.id };

    await AreasModel.deleteMany(filter);
    await TokensModel.deleteMany(filter);
    await ObjetivesModel.deleteMany(filter);

    res.send()
  }
  catch (e) {
    if (e.code === 'ENOENT') {
      return res.status(404).send({
        message: "El archivo no existe"
      })
    }
    console.log(e);
    res.status(500).send();
  }
}
module.exports = controller;