import { ComponentProps } from "react";

import qrcode from "../../assets/QR-code.png";
import { useLangue } from "../../context/useLanguage";

import { Aperture, Instagram, Phone } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export type SectionProps = ComponentProps<"section"> &
  VariantProps<typeof section>;

const section = tv({
  slots: {
    base: "flex justify-center items-center h-screen w-full max-w-7xl my-0 mx-auto",
    article: "w-4/5 flex justify-between dark:text-slate-50",
    aside: "flex flex-col justify-start items-start gap-8 min-[450px]:max-w-sm",
    figure: " hidden md:flex items-center justify-center"
  }
});
export function Contact() {
  const { t } = useLangue();

  const { base, article, aside, figure } = section();

  return (
    <section className={base()}>
      <article className={article()}>
        <aside className={aside()}>
          <div className="flex justify-center gap-4 items-center">
            <h2 className="font-Fredoka text-9xl font-semibold">Hey</h2>
            <Aperture size={40} />
          </div>
          <p className="flex flex-col text-base lg:text-lg font-Poppins gap-1">
            <p>{t("contact.p1")}</p>
            <p>{t("contact.p2")}</p>
          </p>
          <ul className="flex items-start justify-center gap-6 mt-6">
            <li>
              <a href="#">
                <Phone size={32} />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram size={32} />
              </a>
            </li>
          </ul>
        </aside>
        <figure className={figure()}>
          <img src={qrcode} alt="qrcode para o whatapp" />
        </figure>
      </article>
    </section>
  );
}
