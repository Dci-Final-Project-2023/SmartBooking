import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import createError from "../utils/error.js";

export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json(savedBooking);
  } catch (error) {
    next(error);
  }
};

export const getSingleBooking = async (req, res, next) => {
  try {
    const booking = await Booking.find({ "user._id": req.params.userID });
    console.log(req.params.userID);
    console.log(booking);
    if (!booking) {
      return res.status(404).json("Booking is not found");
    }
    res.status(200).json(booking);
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req, res, next) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBooking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { Bookings: req.params.id },
    });
  } catch (error) {
    next(error);
  }
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json("delete successful");
  } catch (error) {
    next(error);
  }
};
