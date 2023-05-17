import Footer from "../components/layout/Footer";
import HowWork from "../components/home/HowWork";
import Newsletter from "../components/home/Newsletter";
import Featured from "../components/home/Featured";
import Suggestion from "../components/home/Suggestion";
import Profile from "../components/home/Profile";
import SearchBar from "../components/home/SearchBar";
import BgImage from "../components/layout/BgImage";
import FeatureAngebot from "../utils/FeatureAngebot";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SearchBar />
      <FeatureAngebot />
      <Suggestion />
      <BgImage />
      <Featured />
      <BgImage />
      <HowWork />
      <BgImage />
      <Profile />
      <BgImage />
      <Newsletter />
    </>
  );
}
