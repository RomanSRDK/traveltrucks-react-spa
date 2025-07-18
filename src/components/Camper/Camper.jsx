import { Link } from "react-router-dom";
import css from "./Camper.module.css";

function Camper({ camper }) {
  const handleClick = () => {};

  return (
    <article className={css.camperCard}>
      <div>
        <img
          src={camper.gallery[0].thumb}
          alt={camper.name}
          className={css.camperImage}
        />
      </div>

      <div className={css.camperContent}>
        <div className={css.camperTitle}>
          <h2 className={css.camperName}>{camper.name}</h2>
          <div className={css.camperPrice}>
            €{camper.price.toFixed(2)}
            <svg className={css.heartIcon} viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>

        <div className={css.camperMeta}>
          <div className={css.rating}>
            <svg className={css.starIcon} viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>{camper.rating}</span>
            <span>({camper.reviews.length} Reviews)</span>
          </div>

          <div className={css.location}>
            <svg className={css.locationIcon} viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{camper.location.split(",").reverse().join(", ")}</span>
          </div>
        </div>

        <p className={css.camperDescription}>{camper.description}</p>

        <div className={css.camperFeatures}>
          <div className={css.featureTag}>
            <svg className={css.featureIcon} viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span>Automatic</span>
          </div>

          <div className={css.featureTag}>
            <svg className={css.featureIcon} viewBox="0 0 24 24">
              <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
            </svg>
            <span>Petrol</span>
          </div>

          <div className={css.featureTag}>
            <svg className={css.featureIcon} viewBox="0 0 24 24">
              <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM18 20H6v-9.02h12V20z" />
            </svg>
            <span>Kitchen</span>
          </div>

          <div className={css.featureTag}>
            <svg className={css.featureIcon} viewBox="0 0 24 24">
              <path d="M14 13v3c0 1.1-.9 2-2 2s-2-.9-2-2v-3c0-1.1.9-2 2-2s2 .9 2 2z" />
            </svg>
            <span>AC</span>
          </div>
        </div>

        <Link
          to={`/campers/${camper.id}`}
          className={css.showMoreBtn}
          onClick={handleClick}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}

export default Camper;
