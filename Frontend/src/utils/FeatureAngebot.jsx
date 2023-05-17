import React from "react";
import Award from "./Award";

function FeatureAngebot() {
  return (
    <div className=" px-2 py-2 gap-1 lg:py-6 justify-center text-center lg:text-end flex flex-col bg-gradient-to-tr from-green-300 to-blue-300">
      <div className="inline-block">
        <Award />
      </div>
      <p className="md:text-3xl text-xl font-semibold text-slate-100">
        Halber Preis, volles Urlaubs-Upgrade!
      </p>
      <p className="md:text-2xl text-xl font-semibold text-yellow-500">
        Sichere dir 250€ Reiseguthaben umw. für nur 44€ im 1. Jahr!
      </p>
    </div>
  );
}

export default FeatureAngebot;
