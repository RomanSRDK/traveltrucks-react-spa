import { useSelector } from "react-redux";
import { selectСurrentItem } from "../../redux/campers/selectors";
import CamperBookingForm from "../CamperBookingForm/CamperBookingForm";
import css from "./Features.module.css";
import sprite from "../../assets/sprite.svg";

function Features() {
  const camper = useSelector(selectСurrentItem);
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
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
    <>
      <div className={css.camperFeatures}>
        {activeAmenities.map((amenity) => (
          <svg
            key={amenity}
            width="100"
            height="48"
            className={css.featureIcon}
          >
            <use href={`${sprite}#${amenity}`}></use>
          </svg>
        ))}
      </div>
      <ul>
        <li>
          <p>Form: {form}</p>
        </li>
        <li>
          <p>Length: {length}</p>
        </li>
        <li>
          <p>Width: {width}</p>
        </li>
        <li>
          <p>Height: {height}</p>
        </li>
        <li>
          <p>Tank {tank}</p>
        </li>
        <li>
          <p>Consumption: {consumption}</p>
        </li>
      </ul>
    </>
  );
}

export default Features;
