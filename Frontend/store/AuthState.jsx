import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthState(props) {
  const [state, setState] = useState({
    user: null,
    error: null,
    isAuthenticated: false,
    token: null,
    buchung: { customer: null, payment: null, booking: null },
    billing: null,
  });
  return (
    <AuthContext.Provider value={{ state, setState }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;

