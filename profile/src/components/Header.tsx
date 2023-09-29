import { ComponentProps } from "react";

import { UseDark } from "../context/useDarkMode";
import { useLangue } from "../context/useLanguage";

import { Instagram, Moon, Sun } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header>;

const header = tv({
  base: "flex justify-center items-center p-6"
});

export function Header({ ...props }: HeaderProps) {
  const { currentLanguage, handleLanguageChange } = useLangue();
  const Langue = currentLanguage;
  const { theme, ChangeTheme } = UseDark();

  return (
    <header className={header()} {...props}>
      <div className="flex justify-center items-center gap-4 w-full max-w-7xl ">
        <div className="h-px w-[57rem] bg-slate-500 dark:bg-slate-50"></div>
        <p
          className="cursor-pointer dark:text-slate-50"
          onClick={handleLanguageChange}
        >
          {Langue === "pt" ? "PT" : "EN"}
        </p>
        <button onClick={ChangeTheme} type="button">
          {theme === "dark" ? <Moon className="dark:text-slate-50" /> : <Sun />}
        </button>
        <a href="#">
          <Instagram className="dark:text-slate-50" />
        </a>
      </div>
    </header>
  );
}
