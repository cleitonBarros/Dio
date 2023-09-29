import { ComponentProps } from "react";

import { tv, VariantProps } from "tailwind-variants";

export type FooterProps = ComponentProps<"footer"> &
  VariantProps<typeof footer>;

const footer = tv({
  base: "flex justify-center items-center p-6 "
});
export function Footer({ ...props }: FooterProps) {
  return (
    <footer className={footer()} {...props}>
      <article className="flex justify-center items-center  gap-4 w-full max-w-7xl ">
        <p className=" text-black text-base dark:text-slate-50">@2023</p>
        <div className="h-px w-[60rem] bg-slate-500 dark:bg-slate-50"></div>
      </article>
    </footer>
  );
}
