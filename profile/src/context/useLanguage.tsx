import { ReactNode, createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import { TFunction } from "i18next";

interface ProviderProps {
  children: ReactNode;
}

export type languageProps = {
  t: TFunction<"translation", undefined>;
  handleLanguageChange(): void;
  currentLanguage: string;
};
export const LangueContext = createContext({} as languageProps);

function ChangeLanguageProvider({ children }: ProviderProps) {
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  const handleLanguageChange = () => {
    const newLang = currentLanguage === "pt" ? "en" : "pt";
    changeLanguage(newLang);
    setCurrentLanguage(newLang);
  };
  return (
    <LangueContext.Provider
      value={{ t, handleLanguageChange, currentLanguage }}
    >
      {children}
    </LangueContext.Provider>
  );
}

function useLangue() {
  const context = useContext(LangueContext);
  return context;
}
export { ChangeLanguageProvider, useLangue };
