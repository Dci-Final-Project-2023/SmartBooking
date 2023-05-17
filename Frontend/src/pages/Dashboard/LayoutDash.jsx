import React, { useContext, useEffect } from "react";
import UserDashboard from "../../components/dashboard/UserDashboard";
import AdminDashboard from "../../components/dashboard/AdminDashboard";
import AuthContext from "../../../store/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function LayoutDash() {
  const { state } = useContext(AuthContext);
  if (!state?.isAuthenticated) {
    return <Navigate to="/signIn" />;
  }

  return (
    <div>
      {/* <h1 className="text-5xl text-center my-4">Dashboard-Page</h1> */}
      {state?.user?.isAdmin ? (
        <div className="text-2xl">
          <AdminDashboard />
        </div>
      ) : (
        <div className="text-2xl">
          <UserDashboard />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default LayoutDash;
