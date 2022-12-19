const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {type: Schema.Types.ObjectId, ref: 'users'},
  title: String, 
  description: String,
  screenResolution: String,
});

const ProjectsModel = mongoose.model('Projects', projectsSchema);


const activitiesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'},
  zIndexTop: Number
});

const ActivitiesModel = mongoose.model('Activities', activitiesSchema);

const AreasSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'}, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  type: String,
  offset: Object,
  size: Object,
  background: String,
  zIndex: Number
});

const AreasModel = mongoose.model('Areas', AreasSchema);

const tokensSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'}, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  areaId: {type: Schema.Types.Mixed, ref: 'Areas'}, 
  type: String,
  offset: Object,
  size: Object,
  screenOffset: Object,
  clickable: Boolean,
  rotatable: Boolean,
  resizable: Boolean,
  movable: Boolean,
  mathematics: Number,
  content: Object,
  zIndex: Number
});

const TokensModel = mongoose.model('Tokens', tokensSchema);


const objetivesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'}, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  type: String,
  origin: {type: Schema.Types.ObjectId, refPath: 'model_type'},
  target: {type: Schema.Types.ObjectId, refPath: 'model_type'},
  model_type: {type: String, enum: ['Token', 'Areas']},
  value: Number,
});

const ObjetivesModel = mongoose.model('Objetives', objetivesSchema);

module.exports = {ProjectsModel, ActivitiesModel, AreasModel, TokensModel, ObjetivesModel};