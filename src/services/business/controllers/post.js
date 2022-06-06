import mongoose from 'mongoose';

import models from '../../../database/models.js';


const controller = async (req, res)=>{

  const data = req.body


  try{
    const business = new models.BusinessModel({
      _id: new mongoose.Types.ObjectId(),
      businessId: data.businessId.toLowerCase(),
      frontPageImage: data.frontPageImage,
      avatarImage: data.avatarImage,
      businessName: data.businessName,  
      currency: data.currency,
    });
    await business.save();

    data.menu.forEach(async sctn=>{
      const section = new models.SectionModel({
        _id: new mongoose.Types.ObjectId(),
        business: business._id,
        name: sctn.name
      })
      await section.save();

      sctn.items.forEach(async item=>{
        const menuItem = new models.MenuItemModel({
          _id: new mongoose.Types.ObjectId(),
          business: business._id,
          section: section._id,
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image
        })
        await menuItem.save();

      })
    })

    res.send(business)
  }
  catch (e) {
    console.log(e);
 }
  




  
  
}

export default controller;