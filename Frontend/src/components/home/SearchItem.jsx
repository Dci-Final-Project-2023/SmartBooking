import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HotelStore from "../../../store/hotel/HotelStore";

const SearchItem = ({ hotels, filterObject }) => {
  const navigate = useNavigate();
  const setHotel = HotelStore((state) => state.setHotel);
  const handleHotel = () => {
    return setHotel(hotels);
  };

  return (
    <div className="searchItem border border-solid border-gray-300 p-3 rounded flex justify-between gap-5 mb-5 shadow-sm bg-red-100">
      <img
        src={hotels?.photos[1]}
        alt="hotel-image"
        className="siImg w-52 h-52 object-cover rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h1 className="siTitle text-xl text-blue-500  "></h1>
        <span className="siDistance text-xs bg-red-300 px-3 py-2 w-max text-left">
          {hotels?.city}
        </span>
        <span className="siDistance text-md ">{hotels?.name}</span>
        <span className="siDistance text-md ">{hotels?.title}</span>
        <span className="siDistance text-xs ">{hotels?.distance}</span>
        <span className="siTaxiOp text-xs bg-green-500 w-m text-white w-max p-2 rounded ">
          Kostenloses Flughafentaxi{" "}
        </span>
        <span className="siSubtitle text-xs font-bold">
          {hotels?.hotel?.title}
        </span>
        <span className="siFeatures text-xs">{hotels?.desc}</span>
        <span className="siCancelOp text-xs text-green-700 font-bold">
          Kostenfreie Stornierung
        </span>
        <span className="siCancelOpSubtitle text-xs text-green-700">
          Sie können später stornieren, also sichern Sie sich noch heute diesen
          tollen Preis{" "}
        </span>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="siRating flex justify-between items-center gap-2">
          <span className="font-medium">Excellent</span>
          <button className="bg-blue-500 text-white p-1 border-none rounded-full w-8 h-8">
            {hotels?.rating}
          </button>
        </div>
        <div className="siDetailTexts text-right flex flex-col gap-1">
          <span className="siPrice text-2xl">€{hotels?.cheapestPrice}</span>
          <span className="siTaxOp text-xs text-gray-500">
            Inklusive Steuern und Gebühren{" "}
          </span>
          <button
            className="siCheckButton bg-blue-500 hover:bg-blue-600 rounded-sm text-white font-bold py-2 px-1 border-none cursor-pointer"
            onClick={() => {
              handleHotel();
              navigate("/singleHotel", { state: filterObject });
            }}
          >
            Siehe Verfügbarkeit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
