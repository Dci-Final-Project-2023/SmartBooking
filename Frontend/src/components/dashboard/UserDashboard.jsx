import React, { useContext } from "react";
import AuthContext from "../../../store/AuthContext";

function UserDashboard() {
  const { state } = useContext(AuthContext);
  const { user } = state;
  const objectEntries = Object.entries(user);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-red-400"></h1>
     
    </div>
  );
}

export default UserDashboard;
