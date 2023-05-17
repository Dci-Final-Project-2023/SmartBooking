import React from "react";
import { NavLink } from "react-router-dom";

const Deals = () => {
  return (
    <div className="hidden md:block">
      <div
        id="Deals"
        className="flex flex-col items-center text-center lg:items-end lg:text-right mt-3 md:m-3 md:p-3"
      >
        <div className="flex flex-col">
          <span className="text-2xl text-red-400 font-bold">
            Heiß begehrt: Buche jetzt
          </span>
          <span className="text-2xl text-white">Deinen Türkei-Urlaub </span>
        </div>
        <NavLink to="/">
          <div className="pulseItem w-32 h-32 text-white rounded-full bg-myPink flex flex-col justify-center text-center">
            <span className="text-3xl font-extrabold">%</span>
            <span className="text-2xl font-extrabold">TÜRKEI</span>
            <span className="text-xl font-bold">DEALS</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Deals;
