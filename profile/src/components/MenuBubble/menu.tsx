import "./menu.css";
import { useLocation } from "react-router";

import { UseMenu } from "../../context/useMenu";

export function Menu() {
  const location = useLocation();
  const { path } = UseMenu();
  const { pathname } = location;

  return (
    <div className="about ">
      {path(pathname) === "/" ? (
        <a
          className="bg_links page position-1 Work  bg-[#00000033] dark:bg-slate-50 "
          href="/works"
        >
          <span className="icon"></span>
        </a>
      ) : (
        <a
          className="bg_links page position-1 Home bg-[#00000033] dark:bg-slate-50"
          href="/"
        >
          <span className="icon"></span>
        </a>
      )}

      {path(pathname) === "about" ? (
        <a
          className="bg_links page position-2 Work  bg-[#00000033] dark:bg-slate-50"
          href="/works"
        >
          <span className="icon"></span>
        </a>
      ) : (
        <a
          className="bg_links page position-2 About  bg-[#00000033] dark:bg-slate-50"
          href="/about"
        >
          <span className="icon"></span>
        </a>
      )}

      {path(pathname) === "contact" ? (
        <a
          className="bg_links page position-3 bg-[#00000033] dark:bg-slate-50 Work"
          href="/works"
        >
          <span className="icon"></span>
        </a>
      ) : (
        <a
          className="bg_links page position-3 bg-[#00000033] dark:bg-slate-50 Contact"
          href="/contact"
        >
          <span className="icon"></span>
        </a>
      )}

      <a className="bg_links logo bg-[#00000033] dark:bg-slate-50"></a>
    </div>
  );
}
