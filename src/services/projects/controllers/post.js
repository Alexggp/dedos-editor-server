import mongoose from 'mongoose';

import { ProjectsModel } from '../../../database/models.js';


const controller = async (req, res)=>{

  const data = req.body
  try{
    const project = new ProjectsModel({
      _id: new mongoose.Types.ObjectId(),
      userId: data.userId,
      title: data.title
    });
    await project.save();

    res.send(project)
  }
  catch (e) {
    console.log(e);
 }
  




  
  
}

export default controller;