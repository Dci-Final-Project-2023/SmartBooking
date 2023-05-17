import { NavLink } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import SearchBox from "./SearchBox";
import Deals from "./Deals";

export default function SearchBar() {
  return (
    <>
      <div className="Header">
        <main className="z-20">
          <div className="mx-auto w-full py-12 px-4 md:py-4 sm:px-6 lg:px-8">
            <p className="mb-4 text-5xl py-4 mt-6 text-center lg:block hidden font-medium text-gray-100">
              Jetzt Urlaub buchen und Rabatte sichern!
              <NavLink to="/">
                <ArrowForward className="ml-3 text-red-300" />
              </NavLink>
            </p>
            <SearchBox />
            <Deals />
          </div>
        </main>
      </div>
    </>
  );
}
