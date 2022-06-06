import mongoose from 'mongoose';
const { Schema } = mongoose;

const projectsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: Number,
  title: String
});

const ProjectsModel = mongoose.model('Projects', projectsSchema);


const activitiesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: {type: Schema.Types.ObjectId, ref: 'Projects'},
});

const ActivitiesModel = mongoose.model('Activities', activitiesSchema);

const AreasSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: Number, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  type: String,
  offset: Object,
  size: Object,
  background: String
});

const AreasModel = mongoose.model('Areas', AreasSchema);

const tokensSchema = new Schema({
  _id: Schema.Types.ObjectId,
  projectId: Number, 
  activityId: {type: Schema.Types.ObjectId, ref: 'Activities'},
  type: String,
  areaId: Number,
  type: String,
  offset: Object,
  size: Object,
  screenOffset: Object,
  numValue: Number,
  clickable: Boolean,
  rotatable: Boolean,
  resizable: Boolean,
  movable: Boolean,
  mathematics: Number,
  content: Object
});

const TokensModel = mongoose.model('Tokens', tokensSchema);

export  {ProjectsModel, ActivitiesModel, AreasModel, TokensModel};