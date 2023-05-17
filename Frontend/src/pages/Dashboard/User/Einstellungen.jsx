import React, { useContext } from "react";
import AuthContext from "../../../../store/AuthContext";
import { AccountCircleRounded } from "@mui/icons-material";
import FormDash from "../../../utils/FormDash";
import EinstellungenAdmin from "../Admin/EinstellungenAdmin";

function Einstellungen() {
  const { state } = useContext(AuthContext);
  const user = state.user;

  return (
    <main className="flex flex-col mb-24">
      {user?.isAdmin && (
        <section>
          <EinstellungenAdmin />
        </section>
      )}

      {!user?.isAdmin && (
        <section className="flex flex-col gap-2 text-center my-12">
          <h1 className="text-3xl"> Einstellungen</h1>
          <div className="my-2">
            Aktualisieren Sie hier Ihre persönlichen Infos und
            Privatsphäre-Einstellungen.
          </div>

          {user && user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt={user.username}
              className="rounded-full w-24 h-24 m-auto"
            />
          ) : (
            <div className="space-y-1 text-gray-500">
              <AccountCircleRounded className="cursor-pointer" />
              <div className="text-sm text-blue-500">Profilbild hinzufügen</div>
              <div className="text-sm">
                Beiträge mit eigenem Profild wirken authentischer!
              </div>
            </div>
          )}

          <FormDash />
        </section>
      )}
    </main>
  );
}

export default Einstellungen;
