import mongoose, { Schema } from "mongoose";

const partner = new Schema({
  id: {
    type: String,
    required: true,
  },
  tradingName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
    unique: true,
  },
  coverageArea: {
    type: {
      type: String,
      enum: ["MultiPolygon"],
      required: true,
    },
    coordinates: {
      type: [[[[Number]]]],
      required: true,
    },
  },
  address: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const PartnerModel = mongoose.model("Partner", partner);
export default PartnerModel;
