import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
  getHotelsByType,
  hotelBuchung,
  SearchHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//BUCHUNG
router.put("/buchung/:id", hotelBuchung);

//DELETE
router.delete("/:id", deleteHotel);

// GET HOTELS BY TYPE
router.get("/:type", getHotelsByType);

// GET HOTELS BY SEARCH BOX
router.post("/search", SearchHotels);

//GET
router.get("/:id", getSingleHotel);

//GET ALL
router.get("/", getAllHotels);

export default router;
