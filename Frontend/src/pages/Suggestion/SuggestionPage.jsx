import React from "react";
import { Outlet } from "react-router-dom";
import FeatureAngebot from "../../utils/FeatureAngebot";

function SuggestionPage() {
  return (
    <main>
      <div className="Hotel flex text-white items-center text-3xl lg:text-4xl justify-center">
        <p className="pt-8 px-2 text-center">Wählen Sie den Hotelstil nach Ihrem Geschmack aus!</p>
      </div>
      <FeatureAngebot />
      <Outlet />
    </main>
  );
}

export default SuggestionPage;
