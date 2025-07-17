import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

function Header() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <>
      <header className={css.header}>
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
