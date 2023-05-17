import express from "express";
import { createBooking, deleteBooking, getAllBookings, getSingleBooking, updateBooking } from "../controllers/booking.js";
import  {verifyAdmin}  from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createBooking);

//UPDATE
router.put("/:userID/:hotelID",  updateBooking);

//DELETE
router.delete("/:userID/:hotelID", deleteBooking);

//GET
router.get("/:userID", getSingleBooking);

//GET ALL
router.get("/", getAllBookings);

export default router;