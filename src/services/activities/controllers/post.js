import mongoose from 'mongoose';

import { ActivitiesModel } from '../../../database/models.js';


const controller = async (req, res)=>{

  const data = req.body
  try{
    const activity = new ActivitiesModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId
    });
    await activity.save();

    res.send(activity)
  }
  catch (e) {
    console.log(e);
 }
  




  
  
}

export default controller;