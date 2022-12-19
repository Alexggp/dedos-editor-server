const mongoose = require('mongoose');

const { ObjetivesModel } = require('../../../database/models/projects');


const controller = async (req, res)=>{
  const data = req.body
  try{
    const objetive = new ObjetivesModel({
      _id: new mongoose.Types.ObjectId(),
      ...data
    });
    await objetive.save();
    res.send(objetive)
  }
  catch (e) {
    console.log(e);
    res.status(500).send();
 }
}
module.exports = controller;