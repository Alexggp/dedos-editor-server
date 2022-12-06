const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: {type: Schema.Types.ObjectId, ref: 'users'},
  title: String, 
  description: String,
  screenResolution: String
});

const ProjectsModel = mongoose.model('Projects', projectsSchema);


const activitiesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'},
});

const ActivitiesModel = mongoose.model('Activities', activitiesSchema);

const AreasSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'}, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  type: String,
  offset: Object,
  size: Object,
  background: String
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
  content: Object
});

const TokensModel = mongoose.model('Tokens', tokensSchema);

module.exports = {ProjectsModel, ActivitiesModel, AreasModel, TokensModel};