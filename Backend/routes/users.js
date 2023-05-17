import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  logoutUser,
  newBuchung,
} from "../controllers/user.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.use(verifyToken);// LOGOUT USER
router.get("/logout", logoutUser);

// GET ALL USERS
router.get("/", getUsers);

// GET SINGLE USER
router.get("/:id", getUser);

// UPDATE USER
router.put("/:id", updateUser);

// DELETE USER
router.delete("/:id", deleteUser);

// NEW BUCHUNG
router.post("/newBuchung/:id", newBuchung);

export default router;
