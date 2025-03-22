import { Link } from "react-router-dom";
import "./Reviews.css";
import Review from "../Review/Review";

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      <ul className="reviews__list">
        {reviews.map((review) => {
          return (
            <li key={review.id} className="reviews__item">
              <Link to={`${review.id}`}>{review.title}</Link>
            </li>
          );
        })}
      </ul>
      <p>My reviews will go here!</p>
      <Review reviews={reviews} />
    </div>
  );
}

export default Reviews;
