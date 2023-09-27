import { ComponentProps } from "react";

import { Instagram, Sun } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header>;

const header = tv({
  base: "flex justify-center items-center p-6"
});

export function Header({ ...props }: HeaderProps) {
  return (
    <header className={header()} {...props}>
      <div className="flex justify-center items-center gap-4 w-full max-w-7xl ">
        <div className="h-px w-[57rem] bg-slate-500"></div>
        <a href="#">PT</a>
        <a href="">
          <Sun />
        </a>
        <a href="#">
          <Instagram />
        </a>
      </div>
    </header>
  );
}
