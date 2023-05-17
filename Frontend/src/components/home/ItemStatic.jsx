import React from "react";
import { NavLink } from "react-router-dom";
import HotelStore from "../../../store/hotel/HotelStore";

const ItemStatic = () => {
  let images = [
    {
      name: "Mountain Lodge",
      type: "Luxury ",
      city: "Aspen",
      address: "456 Snowmass Rd",
      distance: "500m from center",
      photos: [
        "https://cdn.pixabay.com/photo/2015/11/27/20/28/cathedral-1066314_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg",
      ],
      title: "Experience rustic charm in the mountains",
      desc: "This cozy lodge is a perfect getaway for nature lovers",
      rating: 4.2,
      rooms: ["Standard Room", "Deluxe Suite"],
      cheapestPrice: 299,
      featured: true,
      maxPeople: 5,
      features: [],
    },
    {
      features: [],
      name: "Safari Lodge",
      type: "Lodge",
      city: "Kruger National Park",
      address: "Skukuza Rest Camp",
      distance: "in centrum",
      photos: [
        "https://cdn.pixabay.com/photo/2016/11/18/17/41/summer-1836046_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/06/12/12/10/castle-park-806854_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg",
      ],
      title: "Experience the ultimate safari adventure",
      desc: "This lodge offers an unforgettable wildlife experience in the heart of Kruger National Park",
      rating: 4.9,
      rooms: ["Bush View Room", "Savannah Suite"],
      cheapestPrice: 300,
      featured: true,
      maxPeople: 5,
    },
    {
      features: [],
      name: "Rooftop Hotel",
      type: "Boutique",
      city: "Tokyo",
      address: "2 Chome-2-1 Nihonbashi, Chuo City",
      distance: "500 from center",
      photos: [
        "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/11/27/20/28/cathedral-1066314_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg",
      ],
      title: "Stay in the heart of Tokyo",
      desc: "This boutique hotel boasts stunning views of the city skyline from its rooftop bar",
      rating: 4.7,
      rooms: ["City View Room", "Sky Suite"],
      cheapestPrice: 250,
      featured: true,
      maxPeople: 10,
    },
  ];
  
  
 
  return (images.map((hotel) => 
  {
    const setHotel = HotelStore((state) => state.setHotel);
    const handleHotel = () => {
        return setHotel(hotel);
      };
    return(
    <div className="searchItem border border-solid border-gray-300 p-2 rounded flex justify-between gap-5 mb-5 shadow-sm bg-red-400">
      <img
        src={hotel.photos[0]}
        alt=""
        className="siImg w-52 h-52 object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h1 className="siTitle text-xl text-blue-500  "></h1>
        <span className="siDistance text-xs ">{hotel.distance}</span>
        <span className="siTaxiOp text-xs bg-green-700 w-m text-white w-max p-1 rounded ">
          Free airport taxi
        </span>
        <span className="siSubtitle text-xs font-bold">{hotel.title}</span>
        <span className="siFeatures text-xs">{hotel.desc}</span>
        <span className="siCancelOp text-xs text-green-700 font-bold">
          Free cancellation
        </span>
        <span className="siCancelOpSubtitle text-xs text-green-700">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="siRating flex justify-between">
          <span className="font-medium">Excellent</span>
          <button className="bg-blue-800 text-white p-1 border-none">
            {hotel.rating}
          </button>
        </div>
        <div className="siDetailTexts text-right flex flex-col gap-1">
          <span className="siPrice text-2xl">€{hotel.cheapestPrice}</span>
          <span className="siTaxOp text-xs text-gray-500">
            Includes taxes and fees
          </span>
          <button onClick={handleHotel} className="siCheckButton bg-blue-500 hover:bg-blue-600 rounded-sm text-white font-bold py-2 px-1 border-none cursor-pointer">
            {" "}
            <NavLink to={`/singleHotel`}>
              See availability
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )})
  )
};

export default ItemStatic;
