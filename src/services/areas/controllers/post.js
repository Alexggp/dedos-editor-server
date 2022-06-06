import mongoose from 'mongoose';

import { AreasModel } from '../../../database/models.js';


const controller = async (req, res)=>{

  const data = req.body
  try{
    const area = new AreasModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId,
      type: data.type,
      offset: data.offset,
      size: data.size,
      background: data.background
    });
    await area.save();

    res.send(area)
  }
  catch (e) {
    console.log(e);
 }
}

export default controller;