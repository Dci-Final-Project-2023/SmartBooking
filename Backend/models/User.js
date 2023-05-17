import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
      default: "https://picsum.photos/200",
    },
  },
  { timestamps: true }
);

// UserSchema.pre("save", async function (next) {
//   const saltRounds = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, saltRounds);
//   next();
// });

UserSchema.methods.comparePassword = async function (password, userPassword) {
  const IsPassCorrect = await bcrypt.compare(password, userPassword);
  return IsPassCorrect;
};

UserSchema.methods.createToken = async function (payload, secretKey) {
  console.log("test");
  const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
  return token;
};

const User = model("User", UserSchema);

export default User;

// user : {
// buchung : [{
//   customer: {firstName ,lastName,address1,address2,city,zip,state,country}},
//   payment: { cardNumber,cardName,expDate,cvc,saveCard}}
// }]
// }
