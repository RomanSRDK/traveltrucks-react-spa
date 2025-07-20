import { useSelector } from "react-redux";
import { selectСurrentItem } from "../../redux/campers/selectors";
import CamperBookingForm from "../CamperBookingForm/CamperBookingForm";
import sprite from "../../assets/sprite.svg";
import css from "./Features.module.css";

function Features() {
  const camper = useSelector(selectСurrentItem);

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
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

  const activeAmenities = Object.keys(amenities).filter(
    (key) => amenities[key]
  );

  const vehicleDetails = [
    { label: "Form", value: form },
    { label: "Length", value: length },
    { label: "Width", value: width },
    { label: "Height", value: height },
    { label: "Tank", value: tank },
    { label: "Consumption", value: consumption },
    { label: "Transmission", value: transmission },
    { label: "Engine", value: engine },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "45px",
      }}
    >
      <div className={css.featuresContainer}>
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

        <h3 className={css.vehicleDetailsTitle}>Vehicle details</h3>

        <ul>
          {vehicleDetails.map(({ label, value }, index) => (
            <li key={index} className={css.vehicleDetailsItem}>
              <p className={css.vehicleDetailsText}>{label}</p>
              <p className={css.vehicleDetailsValue}>{value}</p>
            </li>
          ))}
        </ul>
      </div>
      <CamperBookingForm />
    </div>
  );
}

export default Features;
