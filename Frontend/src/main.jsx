import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../styles/index.scss";
import { SearchContextProvider } from "../store/SearchContext";
import { StoreProvider } from "../store/OpenSearch";
import AuthProvider from "../store/AuthState";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <SearchContextProvider>
        <StoreProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </StoreProvider>
      </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>

);
