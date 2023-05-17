import React from "react";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import WifiIcon from "@mui/icons-material/Wifi";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PoolIcon from "@mui/icons-material/Pool";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const HotelAllgemein = () => {
  return (
    <section className="border p-5">
      <div className="flex flex-col">
        <h1 className="font-semibold text-gray-700 text-xl">Hotelübersicht</h1>
        <p className="border-solid border-red-300 border-2 text-red-400 rounded-lg p-1 text-sm w-32">
          <FamilyRestroomIcon /> Für Familien
        </p>
      </div>
      <section className="flex flex-col mt-3">
        <div className="">
          <p className=" text-gray-800 font-bold ">Beliebste Ausstatungen</p>
          <ul className="flex flex-col justify-between lg:items-start text-green-700  allgemein-list text-sm">
            <li>
              <WifiIcon />
              Wifi kostenfrei
            </li>
            <li>
              <BeachAccessIcon />
              Hoteleigener Strand
            </li>
            <li>
              <PoolIcon />
              Pool verfügbar
            </li>
            <li>
              <AirplanemodeActiveIcon />
              15 Minuten zum Flughafen
            </li>
            <li>
              <LocalParkingIcon />
              Kostenlose Parkplätze
            </li>
          </ul>
        </div>
        <div className=" text-gray-600 my-3 space-y-2">
          <div className="">
            <h1 className="font-bold">Gesamtzahl Zimmer</h1>
            <p className="text-sm">{`< 300`}</p>
          </div>
          <div className="flex">
            <div className="mr-5">
              <h1 className="font-bold">Check-in</h1>
              <p className="text-sm">ab 14:00 Uhr</p>
            </div>
            <div>
              <h1 className="font-bold">Check-out</h1>
              <p>bis 12:00 Uhr</p>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold ">Barrierefreiheit</h1>
            <p className="text-sm">Gesamtes Hotel barrierfrei zugänglich</p>
          </div>
          {/* <div className="">
            <h1 className="font-bold ">Personal spricht folgende Sprachen</h1>
            <p className="text-sm">Englisch, Deutsch</p>
          </div> */}
          {/* <div className="">
            <h1 className="font-bold ">Zielgruppe</h1>
            <p className="text-sm">Badeurlauber</p>
          </div>
          <div className="">
            <h1 className="font-bold ">Hoteltyp</h1>
            <p className="text-sm">Strandhotel</p>
          </div> */}
        </div>
      </section>
    </section>
  );
};

export default HotelAllgemein;
