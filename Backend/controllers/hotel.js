import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Hotel updated successfully!", updatedHotel });
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted. ");
  } catch (error) {
    next(error);
  }
};

export const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

export const getHotelsByType = async (req, res, next) => {
  try {
    const { type } = req.params;
    const hotelsByType = await Hotel.find({ type });
    const hotelsByCity = await Hotel.find({ city: type });
    if (hotelsByType.length > 0) {
      res.status(200).json(hotelsByType);
    } else {
      res.status(200).json(hotelsByCity);
    }
  } catch (error) {
    next(error);
  }
};

// export const SearchHotels = async (req, res, next) => {
//   const { city, people, minPrice, maxPrice } = req.body;
//   console.log(req.body);
//   console.log(typeof people);
//   try {
//     const hotels = await Hotel.find({
//       $or: [{ name: city }, { city: city }],
//       $and: [
//         {
//           cheapestPrice: { $gte: minPrice },
//           cheapestPrice: { $lte: maxPrice },
//         },
//       ],
//       maxPeople: { $gte: people },
//     });

//     console.log(city);
//     console.log(people);
//     res.status(200).json(hotels);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

export const SearchHotels = async (req, res, next) => {
  try {
    const { city, people, minPrice, maxPrice } = req.body;

    const filter = {
      $or: [
        { name: { $regex: city, $options: "i" } },
        { city: { $regex: city, $options: "i" } },
      ],
      maxPeople: { $gte: people },
    };

    if (minPrice !== 0 && maxPrice !== 1000) {
      filter.cheapestPrice = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice !== 0) {
      filter.cheapestPrice = { $gte: minPrice };
    } else if (maxPrice !== 1000) {
      filter.cheapestPrice = { $lte: maxPrice };
    }

    const hotels = await Hotel.find(filter);

    res.status(200).json(hotels);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const hotelBuchung = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { buchung } = req.body;
    const hotel = await Hotel.findById(id);
    const buchungen = hotel.buchungen;
    buchungen.push(buchung);
    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      { buchungen },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Hotel buchung
// 1. Get hotel by id
// 2. Get buchungen from hotel
// 3. Add new buchung to buchungen
// 4. Update hotel with new buchungen
// 5. Return updated hotel
// 6. Test in Postman
// 7. Test in Frontend
// 8. Test in Frontend with user
// 9. Test in Frontend with admin

// data for buchung

//   "buchung": {
//     "userId": "60b9b0f1b3b3c2b4b8f1b3b3",
//     "hotelId": "60b9b0f1b3b3c2b4b8f1b3b3",
//     "startDate": "2021-06-04T00:00:00.000Z",
//     "endDate": "2021-06-04T00:00:00.000Z",
//     "maxPeople": 2,
//     "price": 1000
//   }

// data for hotel
// {
//   "name": "Hotel 1",
//   "type": "Hotel",
//   "city": "Berlin",
//   "country": "Germany",
//   "description": "Hotel 1 in Berlin",
//   "price": 1000,
//   "image": "https://images.unsplash.com/photo-1611095789928-4b7b7b0b2b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBwcm9qZWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
// }

// data for user
// {
//   "username": "user",
//   "email": "user@user",
//   "password": "user"
// }
