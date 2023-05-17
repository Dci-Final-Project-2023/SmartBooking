import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getSingleReview,
  updateReview,
} from "../controllers/review.js";

const router = express.Router();

//CREATE
router.post("/",createReview);

//UPDATE
router.put("/:userID/:hotelID", updateReview);

//DELETE
router.delete("/:userID/:hotelID", deleteReview);

//GET
router.get("/:userID", getSingleReview);

//GET ALL
router.get("/", getAllReviews);

export default router;