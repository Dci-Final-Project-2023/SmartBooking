import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const BookingSchema = new Schema(

  {
    user: {
      type: Object,
      required: true,
    },
    hotel: {
      type: Object,
      required: true,
    },
    buchungDetails: {
      type: Object,
      required: true,
    },
    customer: {
      type: Object,
      required: true,
    },
    payment: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);



export default mongoose.model("Booking", BookingSchema);


// {
//   "userID": "5f9f7b1b9b0b7e2b1c3b3b1b",
//   "hotelID": "5f9f7b1b9b0b7e2b1c3b3b1b",
//   "customer": {
//     "name": "Nguyen Van A",
//     "email": "

//   },
//   "payment": {
//     "method": "credit",
//     "cardNumber": "123456789",
//     "cardName": "Nguyen Van A",
//     "cardDate": "12/20",
//     "cardCVV": "123"
//   }
// }


