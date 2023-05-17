import Review from "../models/Review.js";
import Hotel from "../models/Hotel.js";
import createError from "../utils/error.js";

export const createReview = async (req, res, next) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (error) {
    next(error);
  }
};

export const getSingleReview = async (req, res, next) => {
  try {
    const review = await Review.find({ "user._id": req.params.userID });
    console.log(req.params.userID);
    console.log(review);
    if (!review) {
      return res.status(404).json("Review is not found");
    }
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

export const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { Reviews: req.params.id },
    });
  } catch (error) {
    next(error);
  }
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("delete successful");
  } catch (error) {
    next(error);
  }
};
