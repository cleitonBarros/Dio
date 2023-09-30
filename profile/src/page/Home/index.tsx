import { ComponentProps } from "react";
import { Link } from "react-router-dom";

import { useLangue } from "../../context/useLanguage";
import { ScrollToTop } from "../../hook/useScrollToTop";
import { AnimationScroll } from "../../lib/scrollReveal";

import { tv, VariantProps } from "tailwind-variants";

export type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof section>;

const section = tv({
  slots: {
    base: "flex justify-center items-center min-h-screen",
    article:
      "flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-16 md:gap-0 p-6 ",
    aside:
      "w-80 text-justify md:text-left lg:w-96 text-black md:mt-64  gap-2 lg:mt-96 group",
    list: " flex items-center md:items-end flex-col justify-center gap-12 p-4  group-hover:text-emerald-500",
    link: " list text-5xl min-[450px]:text-7xl md:text-8xl lg:text-9xl uppercase font-Fredoka dark:text-slate-50"
  }
});
export function Home() {
  ScrollToTop();
  AnimationScroll();
  const { t } = useLangue();
  const { base, article, aside, list, link } = section();
  return (
    <section className={base()}>
      <article className={article()}>
        <aside className={aside()}>
          <p className="aside text-sm min-[450px]:text-base font-Poppins dark:text-slate-50">
            {t("home.text")}
          </p>
        </aside>
        <nav className="flex justify-center items-end w-auto">
          <ul className={list()}>
            <li className="transition-all  skew-x-[0.001deg] duration-1000 ease-in-out hover:skew-x-[-20deg]">
              <Link className={link()} to="/works">
                {t("home.works")}
              </Link>
            </li>
            <li className="transition-all skew-x-[0.001deg] duration-1000 ease-in-out hover:skew-x-[-20deg]">
              <Link className={link()} to="/about">
                {t("home.about")}
              </Link>
            </li>
            <li className="transition skew-x-[0.001deg]  duration-1000 ease-in-out hover:skew-x-[-20deg]">
              <Link className={link()} to="/contact">
                {t("home.contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
}
