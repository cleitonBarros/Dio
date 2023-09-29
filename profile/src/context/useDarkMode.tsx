import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

interface ProviderProps {
  children: ReactNode;
}
type themeType = "light" | "dark";
type darkProps = {
  theme: string;
  ChangeTheme(): void;
};

export const DarkModeContext = createContext({} as darkProps);

function DarkModeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState<themeType>(
    () => localStorage.getItem("Diulio-theme") as themeType
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function ChangeTheme() {
    const ThemeValue = theme === "dark" ? "light" : "dark";
    setTheme(ThemeValue);
    localStorage.setItem("Diulio-theme", ThemeValue);
  }
  return (
    <DarkModeContext.Provider value={{ theme, ChangeTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function UseDark() {
  const context = useContext(DarkModeContext);
  return context;
}
export { DarkModeProvider, UseDark };
