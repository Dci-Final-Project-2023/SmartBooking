import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { StoreContext } from "../../../store/OpenSearch";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  Star,
} from "@mui/icons-material";
import { usePaginate } from "../../hooks/usePaginate";
import HotelStore from "../../../store/hotel/HotelStore";
import FeaturedOne from "../../components/home/FeaturedOne";
import Animations from "../../utils/Animations";

function SingleSuggestionPage() {
  const { type } = useParams();
  const url = `${import.meta.env.VITE_API_HOTELS}${type}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    setPostsPerPage(3);
  }, []);

  const {
    isPending,
    error,
    posts: hotels,
    previous,
    next,
    currentPage,
    totalPages,
    pagIsShown,
    postsPerPage,
    setPostsPerPage,
  } = usePaginate(url);

  // const { hotel, setHotel } = useContext(StoreContext);
  // const hotel = HotelStore((state) => state.hotel);
  const setHotel = HotelStore((state) => state.setHotel);

  if (isPending) return <div className="text-center flex justify-center"> <Animations/></div>;
  if (error) return <div className="text-center">Error...</div>;

  const handleHotelClick = (selectedHotel) => {
    setHotel(selectedHotel);
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={`bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-2xl ${
            i === currentPage ? "bg-blue-500" : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="bg-slate-200 py-8 px-4">
      <h1 className="text-gray-600 text-3xl ps-6 py-2">
        Insgesamt {hotels.length} {hotels.length > 1 ? "Hotels" : "Hotel"} in
        dem Typ {type} ..
      </h1>
      <Grid container spacing={4} className="">
        {hotels.map((hotelItem, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <NavLink to="/singleHotel">
              <div
                onClick={() => handleHotelClick(hotelItem)}
                className="flex justify-start p-6 rounded-md shadow-md hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:mx-0 lg:mx-6 xl:mx-0"
              >
                <div className="">
                  <img
                    className="rounded-md h-64 sm:h-72 md:h-96 xl:h-72 md-w-48 object-cover"
                    src={hotelItem.photos[1]}
                    alt={hotelItem.name}
                  />
                </div>
                <div className="p-2 my-2 w-full text-left ">
                  <div className="flex gap-1 items-center">
                    <button className="bg-yellow-500 text-xs hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-2xl">
                      {hotelItem.city}
                    </button>
                    <button className="bg-green-500 text-xs hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl">
                      {hotelItem.distance}
                    </button>
                   
                   <FeaturedOne/>
                    
                  </div>
                  <h2 className="text-gray-800 text-lg mt-4 ">
                    {hotelItem.title}
                  </h2>
                  <div className="text-gray-700 text-sm mt-2">
                    {hotelItem.desc}
                  </div>
                  <div className="flex justify-between mt-5">
                    <span className="flex gap-2 p-2">
                      <Star className="text-orange-500" /> {hotelItem.rating}
                    </span>
                    <span className="flex justify-center border rounded-md px-4 py-2 border-amber-500">
                      {hotelItem.cheapestPrice} €
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          </Grid>
        ))}
      </Grid>

      {pagIsShown && (
        <div className="flex justify-center mt-5">
          <div className="flex gap-3 mt-5">
            <button
              onClick={previous}
              className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-3 rounded-md text-sm "
            >
              <ArrowBackIosRounded /> previous
            </button>
            {generatePaginationButtons()}
            <button
              onClick={next}
              className="bg-blue-500 hover:bg-blue-400 text-white  py-2 px-3 rounded-md text-sm"
            >
              next <ArrowForwardIosRounded />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleSuggestionPage;
