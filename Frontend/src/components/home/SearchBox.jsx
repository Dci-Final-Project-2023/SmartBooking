import { Boy, CalendarMonth, SavedSearch } from "@mui/icons-material";
import axios from "axios";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/OpenSearch";
import { SearchContext } from "../../../store/SearchContext";

const SearchBox = () => {
  useEffect(() => {
    setOpenDate(false);
  }, []);

  const {
    openDate,
    setOpenDate,
    openOptions,
    setOpenOptions,
    destination,
    setDestination,
    searchHotel,
    setSearchHotel,
  } = useContext(StoreContext);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key:"selection",
        },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const { dispatch } = useContext(SearchContext);

  const handleSearch = async () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
    const totalPeople = Number(options.adult) + Number(options.children);
    await axios
      .post(import.meta.env.VITE_API_GET_HOTELS_BY_SEARCH, {
        city: destination,
        people: totalPeople,
        minPrice: 0,
        maxPrice: 1000,
      })
      .then((response) => {
        setSearchHotel(response.data);
      });
  };

  return (
    <div id="" className="flex  max-w-6xl m-auto lg:mb-16">
      <div className="headerSearch  m-auto lg:w-full bg-slate-100 border-solid border-3 border-red-300 flex flex-col lg:flex-row items-center justify-around py-1 shadow-3xl w-full px-6 lg:px-0 gap-2 pt-2 lg:pt-1 rounded-2xl ">
        <div className="headerSearchItem w-full flex items-center border p-3 my-0 rounded-lg text-gray-400 bg-red-100">
          <SavedSearch className="text-slate-500 " />
          <input
            type="text"
            placeholder="Hotelname or Reiseziel"
            className="headerSearchInput text-gray-400 border-none m-0 py-2 w-full bg-red-100"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* date input  */}
        <div className="headerSearchItem relative w-full flex items-center border py-5 my-0 px-3 rounded-md  bg-red-100">
          <span
            onClick={() => {
              if (openDate === false) {
                setOpenDate(!openDate);
              } else {
                setOpenDate(false);
              }
            }}
            className="headerSearchText text-gray-400 "
          >
            <CalendarMonth className="pb-1 me-2" />
            {`${format(dates[0].startDate, "MM/dd/yyyy")} bis ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}
          </span>
          {openDate && (
            <div
              onMouseLeave={() => setOpenDate(false)}
              className="date absolute top-12 left-0 z-10"
            >
              <DateRange
                editableDateInputs={true}
               
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                minDate={new Date()}
                maxDate={new Date(2023, 12, 31)}
              />
            </div>
          )}
        </div>
        <div className="headerSearchItem relative w-full flex items-center  border py-5 px-3 my-0 rounded-md bg-red-100">
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText text-gray-400"
          >
            <Boy className="pb-1" />
            {`${options.adult} Erwachsene | ${options.children} Kinder | ${options.room} Zimmer`}
          </span>

          {/* box */}
          {openOptions && (
            <div
              onMouseLeave={() => setOpenOptions(false)}
              className="options absolute top-14 w-64  bg-blue-50  text-gray-400  rounded-md"
            >
              <div className="optionItem flex justify-between m-3">
                <span className="optionText">Erwachsene</span>
                <div className="optionCounter flex items-center gap-3 text-sm text-black">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem  flex justify-between m-3">
                <span className="optionText">Kinder</span>
                <div className="optionCounter flex items-center gap-3 text-sm text-black">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem flex justify-between m-3">
                <span className="optionText">Zimmer</span>
                <div className="optionCounter flex items-center gap-3 text-sm text-black">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton w-8 h-8 border border-solid border-indigo-300 text-indigo-400 cursor-pointer bg-white "
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem flex md:w-48">
          <button
            onClick={handleSearch}
            className="headerBtn block bg-gray-600 text-white px-5 py-3 lg:my-0 my-3 w-full md:mx-2 mx-24 rounded-lg cursor-pointer"
          >
            HOTEL FINDEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
