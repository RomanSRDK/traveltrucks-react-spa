import css from "./CamperView.module.css";
import sprite from "../../assets/sprite.svg";

function CamperView({ camper }) {
  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  return (
    <>
      <div>
        <h2 className={css.camperName}>{name}</h2>
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
        <span className={css.camperPrice}>€{price.toFixed(2)}</span>
      </div>

      <div className={css.camperImages}>
        {gallery.map((image, index) => (
          <img key={index} src={image.thumb} alt={`${camper.name}`} />
        ))}
      </div>

      <p className={css.camperDescription}>{description}</p>
    </>
  );
}

export default CamperView;
