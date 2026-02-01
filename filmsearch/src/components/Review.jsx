import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "931413e320c91d34d848893b12e7ec1f";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=uk-UA`
    )
      .then(res => res.json())
      .then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don`t have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
