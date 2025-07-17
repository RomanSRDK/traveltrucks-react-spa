import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";

function CampersList({ campers }) {
  return (
    <ul className={css.campersList}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.camperItem}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CampersList;
