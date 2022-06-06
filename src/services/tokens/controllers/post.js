import mongoose from 'mongoose';

import { TokensModel } from '../../../database/models.js';


const controller = async (req, res)=>{

  const data = req.body
  try{
    const token = new TokensModel({
      _id: new mongoose.Types.ObjectId(),
      projectId: data.projectId,
      activityId: data.activityId,
      areaId: data.areaId,
      type: data.type,
      offset: data.offset,
      size: data.size,
      screenOffset: data.screenOffset,
      numValue: data.numValue,
      clickable: data.clickable,
      rotatable: data.rotatable,
      resizable: data.resizable,
      movable: data.movable,
      mathematics: data.mathematics,
      content: data.content
    });
    await token.save();

    res.send(token)
  }
  catch (e) {
    console.log(e);
 } 
}

export default controller;