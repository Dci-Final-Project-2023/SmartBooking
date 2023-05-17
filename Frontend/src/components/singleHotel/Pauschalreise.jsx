import React, { useEffect } from "react";
import BedIcon from "@mui/icons-material/Bed";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import HotelStore from "../../../store/hotel/HotelStore";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";

function Pauschalreise({ buchungDetails }) {
  const { state, setState } = useContext(AuthContext);
  const user = state?.user;

  const hotel = HotelStore((state) => state.hotel);

  const navigate = useNavigate();

  const duration = moment(buchungDetails?.dates[0].endDate).diff(
    moment(buchungDetails?.dates[0].startDate),
    "days"
  );

  const gesamtPrice =
    Number(hotel?.cheapestPrice) *
    Number(buchungDetails?.options.adult) *
    Number(buchungDetails?.options.room) *
    duration;

  useEffect(() => {
    setState((prevState) => {
      const newBooking = { buchungDetails };
      const bookingArray = Array.isArray(prevState.buchung.booking)
        ? prevState.buchung.booking
        : [];
      return {
        ...prevState,
        billing: gesamtPrice,
        buchung: {
          ...prevState.buchung,
          booking: { newBooking, hotel, user },
        },
      };
    });
  }, [buchungDetails, setState, gesamtPrice]);

  const handleBuchung = () => {
    if (buchungDetails === null) {
      navigate("/");
      return;
    }
    navigate("/buchung");
  };

  return (
    <div className="bg-red-200 w-96">
      <div className=" mt-3 md:mt-0 min-w-96 p-5">
        <div className="flex justify-between align-middle items-center">
          <p className="font-bold text-gray-600">
            <BedIcon className="text-green-600 pb-1" />
            Pauschalreise
          </p>
          <p className="bg-red-400 text-white font-bold rounded-lg px-3 py-2 text-sm ">
            % Deal
          </p>
        </div>

        <section className="flex flex-col justify-between mt-3 ">
          {/* <p className="text-sm">12.05.2023-19.05.2023</p> */}
          <div>
            <h3 className="text-lg">Buchungsdetails</h3>
            <p className="text-sm text-gray-700">
              Ankunftsdatum :{" "}
              {moment(buchungDetails?.dates[0].startDate).format("DD-MM-YYYY")}
            </p>
            <p className="text-sm text-gray-700">
              Auskunftsdatum :{" "}
              {moment(buchungDetails?.dates[0].endDate).format("DD-MM-YYYY")}
            </p>
            <p className="text-sm text-gray-700">
              Übernachtung : {duration}{" "}
              {duration === 1 || duration === 0 ? "Tag" : "Tage"}
            </p>

            <div className="flex flex-col text-sm text-gray-700 my-2">
              <p className="font-bold">Anzahl der Person</p>
              <span>adult : {buchungDetails?.options.adult || 0}</span>
              <span>children : {buchungDetails?.options.children || 0}</span>
              <span>room : {buchungDetails?.options.room || 0}</span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-blue-800 font-bold space-x-2">
              <span>Gesamtpreis :</span>
              <del className="text-red-600 font-bold text-sm ">
                {Math.round(gesamtPrice * 1.2) || 0}€
              </del>
              <span>{gesamtPrice || 0} €</span>
            </p>
          </div>
        </section>

        <section className="text-green-600 my-2">
          <p className="text-sm">Halbpension</p>
          <p className="text-sm">Doppelzimmer Gartenblick</p>
        </section>

        <button
          onClick={handleBuchung}
          className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-sm px-3 py-2 mt-4 w-max"
        >
          {/* <Link to="/angebote"> </Link> */}

          {buchungDetails === null
            ? "Buchungsdetails auswählen"
            : "Zur Buchung"}
        </button>
        {/* <p className="text-gray-700 mt-3 text-sm">
          Möchten Sie{" "}
          <NavLink to="/" className="text-red-500 font-semibold">
            nur das Hotel
          </NavLink>{" "}
          buchen?
        </p> */}
      </div>
    </div>
  );
}

export default Pauschalreise;
