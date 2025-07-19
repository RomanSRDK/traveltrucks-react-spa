import { useSelector } from "react-redux";
import { selectСurrentItem } from "../../redux/campers/selectors";

function Reviews() {
  const { reviews } = useSelector(selectСurrentItem);
  console.log(reviews);

  return (
    <div>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <ul>
          <li>
            <p>{reviewer_name}</p>
          </li>
          <li>
            <p>{reviewer_rating}</p>
          </li>
          <li>
            <p>{comment}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Reviews;
