import mongoose from 'mongoose';
const { Schema } = mongoose;

const activitiesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  id: Number,
  userId: Number
});

const ActivitiesModel = mongoose.model('Activities', activitiesSchema);

const AreasSchema = new Schema({
  _id: Schema.Types.ObjectId,
  id: Number, 
  activityId: Number,
  type: String,
  offset: Object,
  size: Object,
  background: String
});

const AreasModel = mongoose.model('Areas', AreasSchema);

const tokensSchema = new Schema({
  _id: Schema.Types.ObjectId,
  id: Number, 
  activityId: Number,
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

export default {ActivitiesModel, AreasModel, TokensModel};