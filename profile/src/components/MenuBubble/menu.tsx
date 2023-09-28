import "./menu.css";
import { useLocation } from "react-router";

import { UseMenu } from "../../context/useMenu";

export function Menu() {
  const location = useLocation();
  const { path } = UseMenu();
  const { pathname } = location;

  return (
    <div className="about">
      {path(pathname) === "/" ? (
        <a className="bg_links page position-1 Work" href="/works">
          <span className="icon"></span>
        </a>
      ) : (
        <a className="bg_links page position-1 Home" href="/">
          <span className="icon"></span>
        </a>
      )}

      {path(pathname) === "about" ? (
        <a className="bg_links page position-2 Work" href="/works">
          <span className="icon"></span>
        </a>
      ) : (
        <a className="bg_links page position-2 About" href="/about">
          <span className="icon"></span>
        </a>
      )}

      {path(pathname) === "contact" ? (
        <a className="bg_links page position-3 Work" href="/works">
          <span className="icon"></span>
        </a>
      ) : (
        <a className="bg_links page position-3 Contact" href="/contact">
          <span className="icon"></span>
        </a>
      )}

      <a className="bg_links logo"></a>
    </div>
  );
}
