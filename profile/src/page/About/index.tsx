import { ComponentProps } from "react";

import img from "../../assets/doctor/_MG_6601.jpg";
import img5 from "../../assets/doctor/_MG_6614.jpg";
import img3 from "../../assets/doctor/_MG_6623.jpg";
import img4 from "../../assets/doctor/_MG_6624.jpg";
import img2 from "../../assets/doctor/_MG_6625.jpg";
import portfolio from "../../assets/Portifólio Fotográfico - PT.pdf";
import { useLangue } from "../../context/useLanguage";
import { ScrollToTop } from "../../hook/useScrollToTop";
import { AnimationScroll } from "../../lib/scrollReveal";

import { FolderDown } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof section>;

const section = tv({
  slots: {
    base: " flex justify-center flex-col items-center min-h-screen gap-14  ",
    article:
      " top flex flex-col md:flex-row justify-start items-start w-full max-w-5xl gap-16 md:gap-0 p-6",
    aside: "px-4 text-justify md:w-7/12 relative",
    figure: "flex justify-center  w-full md:flex-col md:w-5/12 gap-8 "
  }
});
export function About() {
  ScrollToTop();
  AnimationScroll();
  const { t } = useLangue();

  const { base, article, aside, figure } = section();
  return (
    <section className={base()}>
      <header className="bottom">
        <h2 className=" font-Garamond font-semibold text-5xl md:text-6xl lg:text-7xl text-slate-950 dark:text-forest-50 ">
          {t("home.about")}
        </h2>
      </header>
      <article className={article()}>
        <figure className={figure()}>
          <img className="w-96 md:w-80" src={img} alt="imagem de perfil" />
        </figure>
        <aside className={aside()}>
          <p className="font-Poppins  text-black dark:text-slate-50 lg:text-lg flex flex-col gap-2">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </p>
          <a
            className="absolute end-full right-0"
            id="download"
            title="portfolio fisico"
            href={portfolio}
            download="Diulio-Portfólio-fotografico"
          >
            <FolderDown
              size={32}
              className="text-slate-950 dark:text-forest-200"
            />
          </a>
        </aside>
      </article>

      <footer className="top-img flex items-center justify-center w-full max-w-5xl gap-16 md:gap-0 p-6">
        <figure className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
          <img
            className=" top-img w-96 md:w-full md:h-full md:col-span-2 "
            src={img4}
            alt="imagem de perfil"
          />
          <img
            className=" top-img w-96 md:w-full md:h-full "
            src={img3}
            alt="imagem de perfil"
          />
          <img
            className=" top-img w-96 md:w-full md:h-full"
            src={img5}
            alt="imagem de perfil"
          />
          <img
            className=" top-img w-96 md:w-full md:h-full md:col-span-2 "
            src={img2}
            alt="imagem de perfil"
          />
        </figure>
      </footer>
    </section>
  );
}
