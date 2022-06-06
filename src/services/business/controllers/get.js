import mongoose from 'mongoose';

import models from '../../../database/models.js';

const ObjectId =  mongoose.Types.ObjectId;

const controller = async (req, res)=>{
  const businessId = req.params.id.toLowerCase()
  try{
    const business = await models.BusinessModel.find({businessId:businessId});
    business[0].menu = await models.SectionModel.find({business: new ObjectId(business[0]._id)});
    for(const section of business[0].menu){
      section.items = await models.MenuItemModel.find({section: new ObjectId(section._id)});
    }
    res.send(business[0]);
  }
  catch (e) {
    res.status(404).send();
 }
  
}

export default controller;

