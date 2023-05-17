import React from "react";

function FeautureDash() {
  return (
    <div className="mt-16 mb-8 space-y-8 ">
      <div className="text-3xl font-medium text-gray-600">Finde Deinen perfekten Urlaub</div>
      <div className="flex justify-center gap-2 md:gap-6 items-baseline ">
        <div className="w-96 space-y-3 text-justify border py-5 px-4 h-48">
          <h2 className="font-bold text-center">
            Gemeinsam gegen Fakebewertungen
          </h2>
          <div>
            SmartBooking geht gemeinsam mit seinen Partnern gegen gefälschte
            Bewertungen vor
          </div>
        </div>

        <div className="w-96 space-y-3 text-justify border py-5 px-4 h-48">
          <h2 className="font-bold text-center">SmartHotel Award</h2>
          <div>
            SmartBooking Award Auszeichnung der beliebtesten Hotels weltweit –
            basierend auf mehr als 623.000 echten Bewertungen aus dem Jahr 2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeautureDash;
