import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "931413e320c91d34d848893b12e7ec1f";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=uk-UA`
    )
      .then(res => res.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast.slice(0, 10).map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "https://via.placeholder.com/200x300"
            }
            alt={actor.name}
            width="100"
          />
          <p>{actor.name}</p>
          <p>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
