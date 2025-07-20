import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import sprite from "../../assets/sprite.svg";
import css from "./Camper.module.css";
import { toggleFavorite } from "../../redux/favorites/slice";

function Camper({ camper }) {
  const dispatch = useDispatch();
  const liked = useSelector(selectFavorites);

  const isLiked = liked.includes(camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper.id));
  };

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

  const activeAmenities = Object.keys(amenities).filter(
    (key) => amenities[key]
  );

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
            <button
              className={`${css.heartIcon} ${isLiked ? css.liked : ""}`}
              onClick={handleToggleFavorite}
            >
              <svg width="24" height="24">
                <use href={`${sprite}#heart-icon`}></use>
              </svg>
            </button>
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
          {activeAmenities.map((amenity, index) => (
            <div key={index} className={css.featureItem}>
              <svg width="20" height="20" className={css.featureIcon}>
                <use href={`${sprite}#${amenity}-icon`}></use>
              </svg>
              <span className={css.featureText}>
                {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
              </span>
            </div>
          ))}
        </div>

        <Link to={`/campers/${id}/features`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </article>
  );
}

export default Camper;
