import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./backend/config/auth0";
import { LexConfig } from "./backend/config/lex.config";
import App from "./App";
import LexDevFramework from "../lex.dev";
// import LexDevFramework from "@finosync/lex-dev-core"
console.log("🚀 LexConfig Settings:", LexConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
      {LexConfig.isDevMode && <LexDevFramework />} {/* ✅ Ensures LexDev renders */}
    </Auth0Provider>
  </StrictMode>
);
