import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-si3naku12b7mstg2.us.auth0.com"
        clientId="VMyYqLIB8GCfTmhIg013NtMQYYlSIuNo"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
