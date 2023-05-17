import { usePaginate } from "../hooks/usePaginate";
import { NavLink } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  Star,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import FeatureAngebot from "../utils/FeatureAngebot";
import cities from "../../store/featuredCities";
import HotelStore from "../../store/hotel/HotelStore";
import FeaturedOne from "../components/home/FeaturedOne";
import Animations from "../utils/Animations";

function Hotels() {
  const url = import.meta.env.VITE_API_HOTELS;

  const {
    data,
    isPending,
    error,
    posts: hotels,
    previous,
    next,

    setPostsPerPage,
  } = usePaginate(url);

  useEffect(() => {
    setPostsPerPage(8);
  }, []);

  const handleHotel = (selectedHotel) => {
    setHotel(selectedHotel);
  };

  // const { hotel, setHotel } = useContext(StoreContext);

  const hotel = HotelStore((state) => state.hotel);
  const setHotel = HotelStore((state) => state.setHotel);

  if (isPending) return <div className="text-center flex justify-center"> <Animations/></div>;
  if (error) return <div className="text-center">Error</div>;

  return (
    <>
      <div className="Hotel">
        <h1 className="flex lg:text-5xl text-2xl text-white items-center text-center justify-center w-full h-full">
          Worauf wartest du noch?
        </h1>
      </div>

      <FeatureAngebot />
      <div className="text-center bg-slate-300 py-4 xl:p-3 md:py-1 lg:px-8 xl:px-20 sm:px-2 shadow-xl">
        <h1 className="lg:text-4xl text:2xl mt-4">Empfohlene Orte zum Übernachten</h1>
        <p className="lg:text-lg text-md text-gray-500 m-2">
          Beliebte Orte zum Übernachten, die Ihnen empfohlen werden!
        </p>
        <hr />

        <div className="flex flex-wrap gap-1 lg:gap-3 my-6 px-2 lg:px-24 items-center justify-around">
          <div className="flex lg:gap-3 gap-1 flex-wrap ">
            {cities.map((city) => {
              return (
                <NavLink
                  to={`/hotels/suggestion/${city}`}
                  key={crypto.randomUUID()}
                >
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-medium text-sm lg:py-2 lg:px-3 px-1 py-1 rounded-lg lg:rounded-xl">
                    {city}
                  </button>
                </NavLink>
              );
            })}
          </div>
          <button className="bg-red-500 hover:bg-red-400 text-white font-medium text-sm lg:py-2 lg:px-3 px-1 py-1 rounded-xl">
            <NavLink to={"/getAllHotels"}>Mehr Anzeigen {"->"}</NavLink>
          </button>
        </div>
        <Grid container spacing={4} className="">
          {hotels.map((hotel, i) => {
            const handleHotel = () => {
              return setHotel(hotel);
            };
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <NavLink to="/singleHotel">
                  <div
                    onClick={() => handleHotel(hotel)}
                    className="flex flex-col md:flex-row justify-start p-6  rounded-md shadow-md hover:shadow-xl "
                  >
                    <div className="md:flex-shrink-0">
                      <img
                        className="rounded-md md:w-64 md:h-80 m-auto object-cover flex h-full items-center"
                        src={hotel.photos[1]}
                        alt={hotel.name}
                      />
                    </div>
                    <div className="p-2 w-full text-left flex flex-col justify-end gap-3">
                      <div className="flex gap-1 items-center">
                      <button className="bg-yellow-400 text-xs hover:bg-yellow-600 text-white lg:px-3 py-2 p-1  min-h-full rounded-lg">
                          {hotel.city}
                        </button>
                        <button className="bg-green-400 text-xs hover:bg-green-600 text-white lg:px-3 py-2 p-1  min-h-full rounded-lg">
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
                      <div className="flex justify-end items-center mt-6">
                        <span className="flex gap-2 p-2">
                          <Star className="text-orange-500" /> {hotel.rating}
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
                </NavLink>
              </Grid>
            );
          })}
        </Grid>

        <div className="flex justify-center py-4">
          <div className="flex gap-3 mt-5">
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
    </>
  );
}

export default Hotels;
