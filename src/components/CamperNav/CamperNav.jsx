import clsx from "clsx";
import css from "./CamperNav.module.css";
import { NavLink } from "react-router-dom";

function CamperNav() {
  const getActiveLinkClass = ({ isActive }) => {
    return clsx(isActive ? css.isActive : css.link);
  };

  return (
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
  );
}

export default CamperNav;
