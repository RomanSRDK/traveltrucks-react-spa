import css from "./Camper.module.css";

function Camper({ camper }) {
  return (
    <div>
      <div>{camper.name}</div>
      <div>{camper.price}</div>
      <div>{camper.rating}</div>
      <div>{camper.reviews.length} reviews</div>
      <div>{camper.location.split(",").reverse().join(", ")}</div>
      <div>{camper.description}</div>
      <img src={camper.gallery[0].thumb} alt={camper.name} />
    </div>
  );
}

export default Camper;
