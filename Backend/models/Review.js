import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    user: {
      type: Object,
      required: true,
    },
    hotel: {
      type: Object,
      required: true,
    },
    reviewsText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);

