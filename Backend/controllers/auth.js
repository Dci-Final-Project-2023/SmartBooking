import User from "../models/User.js";
import createError from "../utils/error.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  try {
    const { username, password, email, isAdmin} = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) {
      return next(createError(404, "User already exists!"));
    }
    const user = new User({ username, password, email, isAdmin });
    const saltRounds = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, saltRounds);
    await user.save();
    return res.status(201).json({ message: "User saved successfully!", user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const IsPassCorrect = await user.comparePassword(password, user.password);
    if (!IsPassCorrect) {
      return next(createError(401, "username and password do not match!"));
    }

    const payload = {
      id: user._id,
      isAdmin: user.isAdmin,
      email: user.email,
    };
    const secretKey = process.env.SECRET_KEY;
    const token = await user.createToken(payload, secretKey, {});

    // res.cookie("access_token", token, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 100,
    //   secure: true,
    //   sameSite: "Lax",
    // });

    // res.status(200).json({ message: "you are logged in!", user });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 100,
        secure: true,
        sameSite: "Lax",
      })
      .status(200)
      .json({ message: "you are logged in!", user });
  } catch (error) {
    next(error);
  }
};
