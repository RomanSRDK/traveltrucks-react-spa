import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./CamperNav.module.css";

function CamperNav() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
    <div className={css.navContainer}>
      <ul className={css.siteNav}>
        <li>
          <NavLink to="features" className={getActiveLinkClass}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={getActiveLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default CamperNav;
