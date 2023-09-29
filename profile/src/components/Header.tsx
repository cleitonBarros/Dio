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
        <div className="h-px w-[57rem] bg-slate-950 dark:bg-forest-200"></div>
        <p
          className="cursor-pointer  text-slate-950 text-lg font-medium block dark:text-forest-200 "
          onClick={handleLanguageChange}
        >
          {Langue === "pt" ? "PT" : "EN"}
        </p>
        <button onClick={ChangeTheme} type="button">
          {theme === "dark" ? (
            <Moon className="dark:text-forest-200" />
          ) : (
            <Sun className="  text-slate-950" />
          )}
        </button>
        <a href="#">
          <Instagram className=" text-slate-950 dark:text-forest-200 " />
        </a>
      </div>
    </header>
  );
}
