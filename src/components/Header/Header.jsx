import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import sprite from "../../assets/sprite.svg";

function Header() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <>
      <header className={css.header}>
        {/* <Link className={css.logoLink} to="/" aria-label="link to home">
          <svg width="136" height="16">
            <use href={`${sprite}#Logo`} />
          </svg>
        </Link> */}
        <nav>
          <ul className={css.siteNav}>
            <li>
              <NavLink to="/" className={getActiveLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/campers" className={getActiveLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
