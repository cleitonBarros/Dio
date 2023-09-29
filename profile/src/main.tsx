import React from "react";
import ReactDOM from "react-dom/client";

import "./lib/i18n";
import "./index.css";
import { DarkModeProvider } from "./context/useDarkMode";
import { ChangeLanguageProvider } from "./context/useLanguage";
import { MenuProvider } from "./context/useMenu";
import { AppRoutes } from "./routes/App.routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChangeLanguageProvider>
      <DarkModeProvider>
        <MenuProvider>
          <AppRoutes />
        </MenuProvider>
      </DarkModeProvider>
    </ChangeLanguageProvider>
  </React.StrictMode>
);
