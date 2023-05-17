import React, { useContext, useState } from "react";
import { Button } from "flowbite-react";
import Users from "../../../components/dashboard/Admin/Users";
import Hotels from "../../../components/dashboard/Admin/Hotels";
import Buchungen from "../../../components/dashboard/Admin/Buchungen";

function EinstellungenAdmin() {


  const [showUsers, setShowUsers] = useState(true);
  const [showHotels, setShowHotels] = useState(false);
  const [showBuchungen, setShowBuchungen] = useState(false);

  const handleUsers = () => {
    setShowUsers(!showUsers);
    setShowHotels(false);
    setShowBuchungen(false);
    };

    const handleHotels = () => {
    setShowUsers(false);
    setShowHotels(true);
    setShowBuchungen(false);
    };

    const handleBuchungen = () => {
    setShowUsers(false);
    setShowHotels(false);
    setShowBuchungen(true);
    };


  return (
    <div className="text-center text-3xl text-gray-600">
      <h1 className="my-4">Einstellungen</h1>

      <div className="flex justify-center my-2">
        <Button.Group>
          <Button className="bg-red-400 hover:bg-red-500 border border-white" onClick={handleUsers}>Users</Button>
          <Button className="bg-red-400 hover:bg-red-500 border border-white" onClick={handleHotels}>Hotels</Button>
          <Button className="bg-red-400 hover:bg-red-500 border border-white" onClick={handleBuchungen}>Buchungen</Button>
        </Button.Group>
      </div>


        {showUsers && (<Users/>) }
        {showHotels && (<Hotels/>) }
        {showBuchungen && (<Buchungen/>) }

    </div>
  );
}

export default EinstellungenAdmin;
