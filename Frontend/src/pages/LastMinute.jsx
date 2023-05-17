import React, { useEffect } from "react";
import { usePaginate } from "../hooks/usePaginate";
import { NavLink } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  Star,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import cities from "../../store/featuredCities";
import Deals from "../components/home/Deals";
import Award from "../utils/Award";
import HotelStore from "../../store/hotel/HotelStore";
import FeaturedOne from "../components/home/FeaturedOne";
import Animations from "../utils/Animations";

export default function LastMinute() {
  const url = import.meta.env.VITE_API_HOTELS;

  const {
    data,
    isPending,
    error,
    posts: hotels,
    setPosts,
    previous,
    next,
    currentPage,
    postsPerPage,
    setPostsPerPage,
  } = usePaginate(url);

  // const { hotel, setHotel } = useContext(StoreContext);
  // const hotel = HotelStore((state) => state.hotel);
  const setHotel = HotelStore((state) => state.setHotel);

  useEffect(() => {
    setPostsPerPage(6);
  }, [hotels]);

  if (isPending) return <div className="text-center flex justify-center"> <Animations/></div>;
  if (error) return <div className="text-center">Error</div>;

  return (
    <main>
      <div
        style={{ height: "380px" }}
        className="bg-cover bg-bottom bg-no-repeat flex items-end justify-end
          bg-[url('https://www.urlaubsvorfreu.de/wp-content/uploads/2020/03/Lastminute-spontan-buchen.jpg')]
          lg:bg-[url('https://www.dorftirol-hotels.com/grafik/resize/2000x953_upload-website-pageimage-1_4_3840x1830.webp')]
          md:bg-fixed"
      >
        <Deals />
      </div>

      <div className="flex flex-col  w-full h-full bg-gradient-to-tr from-green-300 to-blue-300">
        <h1 className="flex flex-col text-2xl text-yellow-500 text-end lg:pe-12 py-2 w-full h-full gap-1">
          <span className="font-semibold space-x-5 text-lg flex justify-end items-baseline">
            <Award />
            <span className="text-2xl">
              Bis zu <b> 50%</b>
            </span>
          </span>
          <span className="text-white text-2xl">
            Mit <b>Last Minute</b> Deals{" "}
          </span>
          <span className="font-semibold">% Sparen %</span>
        </h1>
        <p className="flex text-5xl text-red-400 items-center text-center justify-center w-full h-full"></p>
      </div>

      <div className="flex flex-col py-8 px-1 md:px-12 lg:px-24 bg-slate-300 text-center">
        <h1 className="text-4xl ">Beliebte Reiseziele</h1>
        <p className="text-lg text-gray-500 m-2">
          Mit 1 Klick zu den besten Last Minute Angeboten pro Region!
        </p>
        <hr />
        <div className="flex flex-wrap gap-2 lg:gap-3 my-6 px-4 lg:px-24 items-center justify-around">
          <div className="flex md:gap-3 gap-1 ">
            {cities.map((city) => {
              return (
                <NavLink
                  to={`/hotels/suggestion/${city}`}
                  key={crypto.randomUUID()}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-sm py-2 px-3 rounded-xl">
                    {city}
                  </button>
                </NavLink>
              );
            })}
          </div>
          <button className="bg-red-500 hover:bg-red-400 text-white font-medium text-sm py-2 px-3 rounded-xl">
            <NavLink to={"/getAllHotels"}>Mehr Anzeigen {"->"}</NavLink>
          </button>
        </div>
      </div>

      <div className="text-center bg-slate-300 py-4 xl:p-3 md:py-1 lg:px-8 xl:px-20 sm:px-2 shadow-xl">
        <Grid container spacing={4} className="">
          {hotels
            .sort((a, b) => a.cheapestPrice - b.cheapestPrice)
            .map((hotel, i) => {
              const handleHotel = () => {
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
                  <NavLink to="/singleHotel">
                    <div
                      onClick={handleHotel}
                      className="flex justify-start p-6 rounded-md shadow-md hover:shadow-xl md:mx-0 lg:mx-6 xl:mx-0"
                    >
                      <div className="">
                        <img
                          className="rounded-md h-64 sm:h-72 md:h-96 xl:h-72 md-w-48 object-cover "
                          src={hotel.photos[1]}
                          alt={hotel.name}
                        />
                      </div>
                      <div className="p-2 w-full text-left flex flex-col justify-end gap-3 ">
                        <div className="flex gap-1 items-center">
                          <button className="bg-yellow-500 text-xs hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-2xl">
                            {hotel.city}
                          </button>
                          <button className="bg-green-500 text-xs hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl">
                            {hotel.distance}
                          </button>
                          <FeaturedOne/>
                        </div>
                        <h2 className="text-gray-800 text-lg mt-4 ">
                          {hotel.name}
                        </h2>
                        <div className="text-gray-700 text-sm mt-2">
                          {hotel.desc}
                        </div>
                        <div className="flex justify-end items-center mt-5">
                          <span className="flex gap-2 p-2">
                            <Star className="text-orange-500" /> {hotel.rating}
                          </span>

                          <span className="flex justify-center font-semibold px-4 py-2 border-amber-500">
                            <del className="text-red-500">
                              {Math.round(hotel.cheapestPrice * 1.2)} €
                            </del>
                          </span>
                          <span className="flex justify-center rounded-2xl px-3 py-2 text-sm bg-green-500 text-white">
                            {hotel.cheapestPrice} €
                          </span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </Grid>
              );
            })}
        </Grid>

        <div className="flex justify-center">
          <div className="flex gap-3 my-5">
            <button
              onClick={previous}
              className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-3 rounded-md text-sm "
            >
              <ArrowBackIosRounded /> previous
            </button>
            {/* <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl">
              2
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl">
              3
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl">
              4
            </button> */}
            <button
              onClick={next}
              className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-3 rounded-md text-sm"
            >
              next <ArrowForwardIosRounded />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
