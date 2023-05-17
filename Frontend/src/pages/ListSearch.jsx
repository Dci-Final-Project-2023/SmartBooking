import React, { useContext, useState } from "react";
import { format, set } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../store/OpenSearch";
import SearchItem from "../components/home/SearchItem";
import dayjs from "dayjs";
import axios from "axios";
import ItemStatic from "../components/home/ItemStatic";
import Featured from "../components/home/Featured";

const ListSearch = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filterObject = {
    dates: dates,
    options: options,
    minPrice: minPrice,
    maxPrice: maxPrice,
  };

  const { openDate, setOpenDate, searchHotel, setSearchHotel } =
    useContext(StoreContext);

  const [value, setValue] = React.useState([
    dayjs(new Date()),
    dayjs(new Date()),
  ]);

  const handleSearch = async () => {
    const totalPeople = Number(options.adult) + Number(options.children);
    await axios
      .post(import.meta.env.VITE_API_GET_HOTELS_BY_SEARCH, {
        city: destination,
        people: totalPeople,
        minPrice: Number(minPrice),
        maxPrice: Number(maxPrice),
      })
      .then((response) => {
        setSearchHotel(response.data);
      });
  };

  return (
    <>
      <div className="listContainer flex justify-center pt-2 bg-red-100">
        <div className="listWrapper w-full justify-center max-w-5xl flex flex-col lg:flex-row gap-5">
          <div className="w-96 bg-yellow-300 p-3 shadow-lg rounded-md h-max">
            <h1 className="lsTitle text-3xl text-gray-500 mb-2 py-2 ">
              Suchen
            </h1>
            <div className="lsItem pb-4 text-gray-700">
              <label htmlFor="" className="text-xs">
                Reiseziel
              </label>
              <input
                className="border-none text-sm rounded-sm w-full p-2 text-gray-800"
                type="text"
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem flex flex-col gap-1 mb-2 text-gray-700">
              <label className="text-xs" htmlFor="">
                Check-in Datum
              </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className=" bg-white flex items-center cursor-pointer border-none text-sm rounded-sm w-full p-2 text-gray-800"
              >
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )} `}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  minDate={new Date()}
                  maxDate={new Date(2023, 12, 31)}
                />
              )}
            </div>
            <div className="lsItem flex flex-col mt-4 text-gray-700">
              <label htmlFor="" className="text-xs">
                Optionen
              </label>
              <div className="lsOptions space-y-2">
                <div className="lsOptionItem flex justify-between items-center text-gray-500 text-xs">
                  <span className="lsOptionText">
                    Min Preis <small>pro Nacht (€)</small>
                  </span>
                  <input
                    type="text"
                    className="lsOptionInput text-center w-16 border-none rounded-md"
                    onChange={(e) => {
                      setMinPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="lsOptionItem flex justify-between items-center text-gray-500 text-xs">
                  <span className="lsOptionText">
                    Max Preis <small>pro Nacht (€)</small>
                  </span>
                  <input
                    type="text"
                    className="lsOptionInput text-center  w-16 border-none rounded-md"
                    onChange={(e) => {
                      setMaxPrice(e.target.value);
                    }}
                  />
                </div>
                <div className="lsOptionItem flex justify-between items-center text-gray-500 text-xs">
                  <span className="lsOptionText">Erwachsene</span>
                  <input
                    min={1}
                    type="number"
                    className="lsOptionInput text-center  w-16 border-none rounded-md"
                    placeholder={options.adult}
                    onChange={(e) => {
                      options.adult = e.target.value;
                    }}
                  />
                </div>
                <div className="lsOptionItem flex justify-between items-center text-gray-500 text-xs">
                  <span className="lsOptionText">Kinder</span>
                  <input
                    min={0}
                    type="number"
                    placeholder={options.children}
                    className="lsOptionInput text-center w-16 border-none rounded-md"
                    onChange={(e) => {
                      options.children = e.target.value;
                    }}
                  />
                </div>
                <div className="lsOptionItem flex justify-between items-center text-gray-500 text-xs">
                  <span className="lsOptionText">Raum</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput w-16 text-center border-none rounded-md"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="mt-2 rounded-md bg-blue-700 hover:bg-blue-500 w-full py-2 text-white"
            >
              Suchen
            </button>
          </div>
          <div className="listResult flex-grow-3">
            <h1 className="text-3xl pb-3 my-5 text-gray-500">{`${searchHotel.length} Hotels gefunden`}</h1>

            {/* {searchHotel.length === 0 ? (
              <>
                <h1 className="text-3xl pb-3 text-red-500">
                  Der Beste Rat Für Sie
                </h1>
                <ItemStatic />
              </>
            ) : (
              searchHotel.map((hotels, i) => (
                <div key={i}>
                  <SearchItem hotels={hotels} />
                </div>
              ))
            )} */}

            {searchHotel.map((hotels, i) => (
              <div key={i}>
                <SearchItem hotels={hotels} filterObject={filterObject} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListSearch;
