import User from "../models/User.js";
import createError from "../utils/error.js";
import bcrypt from "bcrypt";

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const { username, password, email, isAdmin } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const updateFields = { username, email, isAdmin };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }

    const result = await User.updateOne({ _id: id }, { $set: updateFields });
    res.status(200).json({
      message: "User has been updated!",
      updatedUser: result.nModified,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return next(createError(404, "User not found"));
    }

    res.status(200).json({ message: "User has been deleted!" });
  } catch (error) {
    next(error);
  }
};

//GET SINGLE USER
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(createError(404, "User not found!"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//GET ALL USERS
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.params.id);
    if (users.length === 0) {
      return next(createError(404, "Users not found!"));
    }
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    next(error);
  }
};

// LOGOUT
export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ msg: "logged out successfully!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const newBuchung = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { buchung } = req.body;
    const user = await User.findById(id);
    const buchungen = user.buchungen;
    buchungen.push(buchung);
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { buchungen },
      { new: true }
    );
    res.status(200).json({ message: "Booking successfull!", updatedUser });
    console.log("updatedUser", updatedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
