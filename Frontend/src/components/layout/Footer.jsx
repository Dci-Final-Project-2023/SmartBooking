import React from "react";

function Footer() {
  return (
    <main className="p-4 bg-slate-300 border-t-2 text-gray-700 flex flex-col w-full">
      <section className="flex justify-around ">
        <div className="">
          <h3 className="font-bold">Service</h3>
          <p>Meine Buchungen</p>
          <p>Fragen & Antworten</p>
          <p>Newsletter abonnieren</p>
        </div>
        <div>
          <h3 className="font-bold">Über SmartBooking</h3>
          <p>Das Unternehmen</p>
          <p>Unsere Werbung</p>
        </div>
      </section>
      <section className="flex justify-around mt-10">
        <div>
          ©2000- 2023 SmartBooking GmbH.
          <span className="block">Alle Rechte vorbehalten</span>{" "}
        </div>
        <div>
          <p className="text-xs">Partner von</p>
          <p className="text-2xl font-bold">Ali & Özgür</p>
        </div>
      </section>
    </main>
  );
}

export default Footer;
