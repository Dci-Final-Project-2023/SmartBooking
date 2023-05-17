import React, { useContext } from "react";
import AuthContext from "../../../../store/AuthContext";
import { Star } from "@mui/icons-material";
import { Accordion } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import FeautureDash from "../../../utils/FeautureDash";
import ÜbersichtAdmin from "../Admin/ÜbersichtAdmin";

function Übersicht() {
  const { state } = useContext(AuthContext);
  const user = state.user;
  const navigate = useNavigate();

  const { isAdmin } = state.user;


  return (
    <div className="flex flex-col xl:flex-row mt-8 justify-center gap-3">
      { !isAdmin &&  <section>
      <aside className="space-y-1 text-center flex mx-auto  md:mx-0 flex-col gap-2  ">
        <img
          src={user.profilePicture}
          alt={user.username}
          className="h-24 w-24 rounded-full mx-auto"
        />
        <p className="font-bold">{user.username}</p>
        <button
          className="px-3 py-2 rounded-lg w-64 mx-auto text-white bg-blue-600 hover:bg-blue-500"
          onClick={() => navigate("/dashboard/einstellungen")}
        >
          PROFIL ERGÄNZEN
        </button>
        <div className="">
          <h3 className="font-semibold">Urlaubssterne</h3>
          <Star className="text-orange-500 pb-1" />
          <span className=""> {"0 / 15 Punkte"}</span>
        </div>
        <div>
          <div className="text-gray-600">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl font-medium pb-1">0</span>
              <span>Bewertungen</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl font-medium pb-1">0</span>
              <span>Bilder</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl font-medium pb-1">0</span>
              <span>Antworten</span>
            </div>
          </div>
          <div className="mt-1 font-semibold text-sm">
            Dabei seit 02.Mai 2023
          </div>
        </div>
      </aside>
      <main className="mx-auto lg:mx-3 mt-4 dashboard">
        <p className="text-3xl text-gray-700">Hallo {user.username}</p>
        <p className="text-md">Willkommen zurück</p>
        <p className="text-lg my-5 ">Ihre persönlichen Updates:</p>

        <Accordion alwaysOpen={true} >
          <Accordion.Panel>
            <Accordion.Title>
              Jetz Urlaub bewerten und Reisegutschein gewinnen!{" "}
              <div className="text-sm  text-gray-600">vor 8 Tagen</div>
            </Accordion.Title>
            <Accordion.Content>
              <p>
                Vom 24.04 - 08.05. geht jede
                <Link
                  to="/dashboard/bewertungen"
                  className="text-blue-500 pl-1"
                >
                  aktive Hotelbewertung
                </Link>{" "}
                als Los in den Lostopf für das Gewinnspiel , bei dem wir{" "}
                <b> 3 x 2.000€ Reisegutscheinever</b>losen.
              </p>
              <Link className="text-blue-500 inline-block mt-3">
                jetzt Bewertung abgeben {">>>"}
              </Link>
              <p className="mb-3">
                Hier gibt es nochmal alle Infos zum Gewinnspiel :{" "}
                <Link className="text-blue-500">Klick!</Link>
              </p>{" "}
              <p>Wir wünschen viel Glück!</p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              Wie teile ich meine Urlaubserfahrung am Besten?
              <div>vor 3 Monaten</div>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-700 dark:text-gray-400">
                Allein im letzten Jahr haben wieder über 1.000.000 Urlauber ihre
                Erfahrungen in Hotelbewertungen geteilt und so anderen geholfen,
                das passende Hotel zu finden. Viele Aspekte werden in einer
                Bewertung genannt - doch was ist beim Schreiben einer
                Hotelbewertung eigentlich zu beachten?
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-400">
                Wussten Sie zum Beispiel, dass es nicht mehr erlaubt ist die
                Bewertung auf einem hoteleigenen Gerät abzugeben? Oder, dass
                Bilder eine Bewertung um ein Vielfaches glaubwürdiger machen?
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-400">
                Wie sie Ihre Erfahrungen besonders hilfreich teilen, haben die
                Kollegen aus der Content Quality Abteilung hier für Sie
                zusammengestellt -{" "}
                <Link className="text-blue-500">
                  schauen Sie doch mal rein!
                </Link>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      <FeautureDash/>
      </main>
      </section>}
     
        {isAdmin && 
           <section>
              <ÜbersichtAdmin/>
           </section>
          }
       
    </div>
  );
}

export default Übersicht;
