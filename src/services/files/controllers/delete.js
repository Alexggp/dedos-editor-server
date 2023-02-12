const { FilesModel } = require('../../../database/models/projects');
const fs = require('fs');
const DIR = './public/';

const removeFiles = async (files) => {

  for (const file of files) {
    try {
      const path = DIR + file.fileName;
      await fs.promises.unlink(path);
      const deleted = await FilesModel.deleteOne({ _id: file._id });
      if (!deleted.deletedCount) {
        throw new Error('Deleting file error!');
      }
    } catch (e) {
      throw new Error('Deleting file error!');
    }

  }
}

const deleteController = async (req, res) => {

  try {
    const files = await FilesModel.find({ fileName: req.params.fileName })
    await removeFiles(files);
    res.send(files);
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

module.exports = { deleteController, removeFiles }