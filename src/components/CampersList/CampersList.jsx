import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";

function CampersList({ campers }) {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CampersList;
