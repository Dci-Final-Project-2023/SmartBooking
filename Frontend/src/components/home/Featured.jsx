import React, { useContext, useState } from "react";
import { StoreContext } from "../../../store/OpenSearch";
import { NavLink, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { ArrowForwardRounded, Star } from "@mui/icons-material";
import { HeartIcon } from "@heroicons/react/24/outline";
import useFetch from "../../hooks/useFetch";
import cities from "../../../store/featuredCities";
import HotelStore from "../../../store/hotel/HotelStore";
import FeaturedOne from "./FeaturedOne";
import Animations from "../../utils/Animations";
const Featured = () => {
  const { isFav, setIsFav, favNum, setFavNum } = useContext(StoreContext);
  const navigate = useNavigate();
  const {
    data: hotels,
    loading,
    error,
  } = useFetch(import.meta.env.VITE_API_HOTELS);
  // const { hotel, setHotel } = useContext(StoreContext);
  const hotel = HotelStore((state) => state.hotel);
  const setHotel = HotelStore((state) => state.setHotel);
  const [favStatus, setFavStatus] = useState({});
  if (loading) {
    return (
      <div className="text-center flex justify-center">
        {" "}
        <Animations />{" "}
      </div>
    );
  }
  if (error || !hotels) {
    return <div className="text-center">Error</div>;
  }
  return (
    <div className="text-center bg-slate-300 xl:pb-16 md:py-1 lg:px-4 xl:px-20 sm:px-2 shadow-xl py-4">
      <h1 className="text-xl lg:text-4xl">
        Ausgewählte Übernachtungsmöglichkeiten
      </h1>
      <p className="text-lg text-gray-500 mt-2 mb-6">
        Beliebte Übernachtungsmöglichkeiten, die wir Ihnen empfehlen!
      </p>
      <div className="flex justify-center mb-8">
        <div className="flex md:gap-2 gap-1 ">
          {cities.map((city, index) => {
            return (
              <button
                key={crypto.randomUUID()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm py-1 lg:px-3 lg:py-2 rounded-lg px-1"
              >
                <NavLink to={`hotels/suggestion/${city}`}>{city}</NavLink>
              </button>
            );
          })}
        </div>
        <div className="ml-2">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium text-sm py-1 lg:px-3 lg:py-2 first:rounded-lg px-1">
            <NavLink to="/getAllHotels">Alle anzeigen</NavLink>
            <ArrowForwardRounded className="ml-1" />
          </button>
        </div>
      </div>
      <Grid container spacing={3} className="">
        {hotels.slice(0, 6).map((hotel, i) => {
          const handleHotel = () => {
            console.log("home");
            return setHotel(hotel);
          };

          return (
            <Grid
              key={i}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              {/* <NavLink to="/singleHotel"> */}
              <div
                onClick={() => {
                  handleHotel();
                  navigate("/singleHotel");
                }}
                className="flex flex-col md:flex-row justify-start p-1 shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 items-top"
              >
                <div className="md:flex-shrink-0 h-80">
                  <img
                    className="rounded-md md:w-64 md:h-80 m-auto object-cover flex h-full items-center"
                    src={hotel.photos[1]}
                    alt={hotel.title}
                  />
                </div>
                <div className="p-1 lg:p-2 w-full text-left flex flex-col gap-1 ">
                  <div className="flex gap-1 items-center">
                    <button className="bg-yellow-400 text-xs hover:bg-yellow-600 text-white lg:p-1  min-h-full rounded-lg">
                      {hotel.city}
                    </button>
                    <button className="bg-green-400 text-xs hover:bg-green-600 text-white lg:p-1  min-h-full rounded-lg">
                      {hotel.distance}
                    </button>
                    <FeaturedOne />
                    {/* <HeartIcon
                      onClick={handleClick}
                        className="h-8 w-8 ml-auto text-red-500  hover:cursor-pointer hover:text-red-700"
                        aria-hidden="true"
                      />  */}
                  </div>
                  <h2 className="text-blue-600 mt-4 ">{hotel.name}</h2>
                  <div className="text-gray-700 text-sm mt-2">{hotel.desc}</div>
                  <div className="flex justify-end items-center mt-6">
                    <span className="flex">
                      <Star className="text-orange-500 animate-pulse pb-1" />{" "}
                      {hotel.rating}
                    </span>
                    <span className="flex justify-center font-semibold mx-4 py-2 border-amber-500 text-sm">
                      <del className="text-red-400">
                        {Math.round(hotel.cheapestPrice * 1.2)} €
                      </del>
                    </span>
                    <span className="flex justify-center rounded-xl px-1 py-1 text-sm text-green-500 border border-yellow-400">
                      {hotel.cheapestPrice} €
                    </span>
                  </div>
                </div>
              </div>
              {/* </NavLink> */}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Featured;
