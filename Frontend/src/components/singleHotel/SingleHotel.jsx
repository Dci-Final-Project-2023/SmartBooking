import React, { useContext } from "react";
import TitleSH from "./TitleSH";
import NavlinkSH from "./NavlinkSH";
import HotelAllgemein from "./HotelAllgemein";
import RelavantBewertung from "./RelavantBewertung";
import { StoreContext } from "../../../store/OpenSearch";
import Pauschalreise from "./Pauschalreise";
import SpCarousel from "./SpCarousel";
import FeatureAngebot from "../../utils/FeatureAngebot";
import HotelStore from "../../../store/hotel/HotelStore";
import { useLocation } from "react-router-dom";

const SingleHotel = () => {

  const {state} = useLocation();
  

  return (
    <main className="">
      <div className="Hotel"></div>
      <FeatureAngebot />
      <section className=" flex flex-col justify-center xl:mx-64">
        <TitleSH />
        <NavlinkSH />
        <section className="flex flex-col lg:flex-row gap-2 mt-7 px-4">
          <SpCarousel />
          <HotelAllgemein />
          <Pauschalreise buchungDetails={state}/>
        </section>
        <RelavantBewertung />
      </section>
    </main>
  );
};

export default SingleHotel;
