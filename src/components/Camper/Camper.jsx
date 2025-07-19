import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import css from "./Camper.module.css";

function Camper({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    reviews,
  } = camper;

  const amenities = {
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const activeAmenities = Object.entries(amenities)
    .filter(([key, value]) => value === true)
    .map(([key]) => key);

  return (
    <article className={css.camperCard}>
      <div className={css.camperImage}>
        <img src={gallery[0].thumb} alt={name} />
      </div>

      <div className={css.camperContent}>
        <div className={css.camperTitle}>
          <h2 className={css.camperName}>{name}</h2>
          <div className={css.camperPriceContainer}>
            <span className={css.camperPrice}>€{price.toFixed(2)}</span>
            <svg width="24" height="24" className={css.heartIcon}>
              <use href={`${sprite}#heart-icon`}></use>
            </svg>
          </div>
        </div>
        <div className={css.ratingWithLocation}>
          <div className={css.rating}>
            <svg width="16" height="16" className={css.ratingIcon}>
              <use href={`${sprite}#rating-icon`}></use>
            </svg>
            <div style={{ textDecoration: "underline" }}>
              <span>{rating}</span>
              <span>({reviews.length} Reviews)</span>
            </div>
          </div>
          <div className={css.location}>
            <svg width="16" height="16" className={css.mapIcon}>
              <use href={`${sprite}#location-icon`}></use>
            </svg>
            <span>{location.split(",").reverse().join(", ")}</span>
          </div>
        </div>

        <p className={css.camperDescription}>{description}</p>

        <div className={css.camperFeatures}>
          {activeAmenities.map((amenity) => (
            <svg
              key={amenity}
              width="120"
              height="48"
              className={css.featureIcon}
            >
              <use href={`${sprite}#${amenity}`}></use>
            </svg>
          ))}
        </div>

        <Link to={`/campers/${id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </article>
  );
}

export default Camper;
