import { Link } from "react-router-dom";
import css from "./Hero.module.css";

function Hero() {
  return (
    <div className={css.hero}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.linkToCatalog} to="/campers">
          View Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
