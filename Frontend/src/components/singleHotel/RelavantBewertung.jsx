import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
const RelavantBewertung = () => {
  return (
    <main className="mx-4 border mt-4 p-3">
      <div className="font-bold text-2xl mb-4">Relevanteste Bewertungen</div>

      <section className="flex gap-5">
        <div className="">
          <p>Weiterempfehlung</p>
          <div className="text-2xl flex items-center">
            <p className="text-red-600">
              <ThumbUpAltIcon fontSize="large" className="pt-1 mx-1" />
            </p>
            97%
          </div>
        </div>
        <div className="">
          <p className="">Gesamtbewertung</p>
          <div className="text-2xl flex items-center">
            <p className="text-yellow-300">
              <WbSunnyIcon fontSize="large" className="pt-1 mx-1" />
            </p>
            5,6/<span className=""> 6</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RelavantBewertung;
