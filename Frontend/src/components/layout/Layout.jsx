import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../../pages/Home";
import ListSearch from "../../pages/ListSearch";
import SuggestionPage from "../../pages/Suggestion/SuggestionPage";
import SingleSuggestionPage from "../../pages/Suggestion/SingleSuggestionPage";
import Bewertungen from "../../pages/Dashboard/User/Bewertungen";
import Übersicht from "../../pages/Dashboard/User/Übersicht";
import Einstellungen from "../../pages/Dashboard/User/Einstellungen";
import Buchungen from "../../pages/Dashboard/User/Buchungen";
import Favorite from "../../pages/Favorite/Favorite";
import Animations from  "../../utils/Animations"
import Scroll from "../../utils/Scroll";

const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Angebote = lazy(() => import("../../pages/Angebote"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Hotels = lazy(() => import("../../pages/Hotels"));
const SingleHotel = lazy(() => import("../singleHotel/SingleHotel"));
const LastMinute = lazy(() => import("../../pages/LastMinute"));
const Calender = lazy(() => import("../../pages/Calender/Calender"));
const LayoutDash = lazy(() => import("../../pages/Dashboard/LayoutDash"));
const Checkout = lazy(() => import("../../pages/Buchung/Checkout"));

function Layout({ children }) {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div className="text-center flex justify-center">
            <Animations />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleHotel" element={<SingleHotel />} />
          <Route path="/getAllHotels" element={<Hotels />} />
          <Route path="/hotels" element={<ListSearch />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/lastMinuteHotels" element={<LastMinute />} />

          <Route path="/hotels/suggestion" element={<SuggestionPage />}>
            <Route path=":type" element={<SingleSuggestionPage />} />
          </Route>
          
          <Route path="/calendar" element={<Calender />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/buchung" element={<Checkout />} />
          <Route path="/angebote" element={<Angebote />} />


          <Route path="/dashboard" element={<LayoutDash />}>
            <Route path="übersicht" element={<Übersicht />} />
            <Route path="bewertungen" element={<Bewertungen />} />
            <Route path="einstellungen" element={<Einstellungen />} />
            <Route path="buchungen" element={<Buchungen />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {children}
      <Scroll/>
      <Footer />
    </div>
  );
}

export default Layout;
