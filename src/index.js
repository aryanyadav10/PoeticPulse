import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-wmc1wd6ozsjxqoy5.us.auth0.com"
      clientId="xpHFJ3vfcegGEuUZtnKsyc6a39UtJi51"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <div
          style={{
            overflowY: "scroll",
            height: "100%",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <App />
        </div>
      </div>
    </Auth0Provider>
  </React.StrictMode>
);
