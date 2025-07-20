import { useSelector } from "react-redux";
import { selectСurrentItem } from "../../redux/campers/selectors";
import CamperBookingForm from "../CamperBookingForm/CamperBookingForm";
import sprite from "../../assets/sprite.svg";
import css from "./Reviews.module.css";

function Reviews() {
  const { reviews } = useSelector(selectСurrentItem);

  // Функция для рендера звезд рейтинга
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          width="16"
          height="16"
          className={`${css.ratingStar} ${
            i <= rating ? css.filled : css.empty
          }`}
        >
          <use href={`${sprite}#rating-icon`}></use>
        </svg>
      );
    }
    return stars;
  };

  // Функция для получения первой буквы имени
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "45px",
      }}
    >
      <div className={css.reviewsList}>
        {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
          <div key={index}>
            <div className={css.reviewHeader}>
              <div className={css.reviewAvatar}>
                {getInitial(reviewer_name)}
              </div>
              <div className={css.reviewInfo}>
                <h4 className={css.reviewerName}>{reviewer_name}</h4>
                <div className={css.reviewRating}>
                  {renderStars(reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.reviewComment}>{comment}</p>
          </div>
        ))}
      </div>
      <CamperBookingForm />
    </div>
  );
}

export default Reviews;
