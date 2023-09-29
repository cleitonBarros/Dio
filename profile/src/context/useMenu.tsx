import { ReactNode, createContext, useContext } from "react";

interface ProviderProps {
  children: ReactNode;
}
type contextProps = {
  path(location: string): string;
};

export const MenuContext = createContext({} as contextProps);

function MenuProvider({ children }: ProviderProps) {
  const path = (location: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pathMappings: any = {
      "/contact": "contact",
      "/about": "about",
      "/works": "works"
    };

    const defaultPath = "/";
    return pathMappings[location] || defaultPath;
  };

  return (
    <MenuContext.Provider value={{ path }}>{children}</MenuContext.Provider>
  );
}
function UseMenu() {
  const context = useContext(MenuContext);
  return context;
}
export { MenuProvider, UseMenu };
