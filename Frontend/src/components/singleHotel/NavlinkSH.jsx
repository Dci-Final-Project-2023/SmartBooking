import React from "react";
import { NavLink } from "react-router-dom";

const NavlinkSH = () => {
  return (
    <section className="px-5">
      <ul className="flex justify-start my-3 text-md gap-1 text-white">
        <li className=" hover:bg-blue-500 bg-blue-400 px-2 text-sm py-2 rounded-md">
          <NavLink to="/">Hotelübersicht</NavLink>
        </li>
        <li className=" hover:bg-blue-500 bg-red-400 px-2 text-sm py-2 rounded-md">
          <NavLink to="/">Bewertungen</NavLink>
        </li>
        <li className=" hover:bg-blue-500 bg-red-400 px-2 text-sm py-2 rounded-md">
          <NavLink to="/">Bilder</NavLink>
        </li>
        <li className=" hover:bg-blue-500 bg-red-400 px-2 text-sm py-2 rounded-md">
          <NavLink to="/">Fragen</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default NavlinkSH;
