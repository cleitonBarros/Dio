import { ReactNode, createContext, useContext } from "react";

interface ProviderProps {
  children: ReactNode;
}
type contextProps = {
  path(location: string): string;
  local: string;
};

export const MenuContext = createContext({} as contextProps);
let local = "";
function MenuProvider({ children }: ProviderProps) {
  const path = (location: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pathMappings: any = {
      "/contact": "contact",
      "/about": "about",
      "/works": "works"
    };
    local = location;
    const defaultPath = "/";
    return pathMappings[location] || defaultPath;
  };

  return (
    <MenuContext.Provider value={{ path, local }}>
      {children}
    </MenuContext.Provider>
  );
}
function UseMenu() {
  const context = useContext(MenuContext);
  return context;
}
export { MenuProvider, UseMenu };
