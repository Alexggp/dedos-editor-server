import Business from '../../../database/models.js';


const controller = async (req, res)=>{

  const update = {name: 'prueba', currency: '$' };
  const filter = {name: 'prueba'};

  const doc = await Business.findOneAndUpdate(filter, update);
  res.send(doc);
  
};

export default controller;