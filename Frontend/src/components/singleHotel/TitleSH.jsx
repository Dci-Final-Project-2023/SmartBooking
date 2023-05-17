import React, { useContext, useEffect } from "react";
import { images } from "../../../store/data";
import Maps from "../../assets/maps.svg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StoreContext } from "../../../store/OpenSearch";
import HotelStore from "../../../store/hotel/HotelStore";
import { stringify } from "postcss";

const TitleSH = () => {
  const hotel = HotelStore((state) => state.hotel);

  return (
    <div className="mt-5 mx-3 px-2 py-4 border">
      <h1 className="lg:text-5xl text-2xl font-bold text-gray-600">
        {hotel.name}
      </h1>
      <p className="flex text-gray-600 mt-3 gap-3">
        <img src={Maps} className="w-4" />
        <span className="text-sm pt-1 hover:text-gray-900 space-x-5">
          <span>{hotel.city}</span>
          <span>{hotel.address}</span>
           
        </span>
        <span className="text-red-400 pt-1 cursor-pointer text-sm font-semibold border-b-2 hover:text-red-600">
          Auf der Karte zeigen
        </span>
      </p>
      <div className="my-3 space-x-4">
        <a href="" className="text-orange-600 space-x-2">
          <ThumbUpOffAltIcon />
          <span className="text-gray-600 text-sm">Bewertung abgeben</span>
        </a>
        <a href="" className="text-orange-600 space-x-2">
          <FavoriteBorderIcon />
          <span className="text-gray-600 text-sm">Merken</span>
        </a>
      </div>
    </div>
  );
};

export default TitleSH;
