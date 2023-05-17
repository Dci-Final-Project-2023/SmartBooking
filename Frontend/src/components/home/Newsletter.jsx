import React from "react";
import { ArrowRightAltRounded } from "@mui/icons-material";
import NewsletterBild from "../../assets/Newsletter.webp";
const Newsletter = () => {
  return (
    <main className="flex bg-slate-300 flex-col-reverse lg:flex-row gap-8 items-center mx-8 px-4 justify-center rounded-sm shadow-2xl m-6 ">
      <div className="writeStg mt-3 mb-6">
        <section>
          <div className="text-2xl lg:text-4xl text-gray-700">
            Abonnieren Sie unseren Newsletter
          </div>
          <div className="text-gray-400">
            Lesen und teilen Sie neue Perspektiven zu fast jedem Thema. Jeder
            ist willkommen
          </div>
        </section>
        <section className="font-semibold text-gray-600 my-4 space-y-0.5">
          <div className="flex gap-3 items-center">
            <p className=" w-8 h-8 bg-blue-400 rounded text-blue-900 p-1">01</p>{" "}
            Erhalten Sie mehr Rabatt
          </div>
          <div className="flex gap-3 items-center">
            <p className="w-8 h-8 bg-red-400 rounded text-red-800 p-1">02</p>{" "}
            Erhalten Sie Premium-Magazine
          </div>
        </section>
        <form>
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Geben Sie Ihre E-Mail-Adresse ein
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block w-full py-4 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ihre E-Mail-Adresse"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <ArrowRightAltRounded />
            </button>
          </div>
        </form>
      </div>
      <div className="newsletter-photo">
        <img src={NewsletterBild} alt="" className="max-w-lg p-3" />
      </div>
    </main>
  );
};

export default Newsletter;
