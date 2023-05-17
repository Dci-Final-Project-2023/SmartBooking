import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function ÜbersichtAdmin() {
  const getHotelsURL = import.meta.env.VITE_API_HOTELS;
  const getUsersURL = import.meta.env.VITE_API_USERS;
  const getBookingsURL = import.meta.env.VITE_API_NEW_BUCHUNG;


  const { data: users, error: errorUsers } = useFetch(getUsersURL);
  const { data: hotels, error: errorHotels } = useFetch(getHotelsURL);
  const { data: bookings, error: errorBookings } = useFetch(getBookingsURL);


  const navigate = useNavigate();

  return (
    <main className=" mx-12 my-8 text-gray-600 text-center">
      <div className="text-4xl font-light text-center">Übersicht</div>
      <div className="text-md font-light mt-2 mb-12">Willkommen zurück, Admin!</div>
      
      <div className="flex flex-col gap-6 ">

     
      <div className="">
        <div
          className="text-3xl font-light text-red-500 hover:text-red-800 cursor-pointer"
          onClick={() => navigate("/dashboard/einstellungen")}
        >
          Hotels
        </div>
        <div className="text-xl font-light mt-3">
          Anzahl Hotels: {hotels?.length}
        </div>
      </div>
      <div className="">
        <div
          className="text-3xl font-light text-red-500 hover:text-red-800 cursor-pointer"
          onClick={() => navigate("/dashboard/einstellungen")}
        >
          Users
        </div>

        <div className="text-xl font-light mt-3">
          Anzahl Users: {users?.length}
        </div>
      </div>

      <div className="">
        <div
          className="text-3xl font-light text-red-500 hover:text-red-800 cursor-pointer"
          onClick={() => navigate("/dashboard/einstellungen")}
        >
          Buchungen
        </div>

        <div className="text-xl font-light mt-3">
          Anzahl Buchungen: {bookings?.length}
        </div>
      </div>
       </div>
    </main>
  );
}

export default ÜbersichtAdmin;
