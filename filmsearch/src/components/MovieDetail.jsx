import { useState, useEffect } from "react"
import { Header } from "./Header";

import { Link, useParams, Outlet, useLocation, useNavigate,} from "react-router-dom";

const API_KEY = "931413e320c91d34d848893b12e7ec1f"

export const MovieDetail = ()=>{
    const [movieIds, setMovieIds] = useState(null)
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const backLink = location.state?.from ?? "/";

    useEffect(()=>{
        fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=uk-UA`
        )
        .then(res => res.json())
        .then(data => setMovieIds(data));
    }, [movieId]);

    if (!movieIds) {
        return <p>Loading...</p>;
    }


    return(
        <>
        <Header/>
            <button onClick={() => navigate(backLink)}>
                Go back
            </button>
            <div key={movieIds.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movieIds.poster_path}`} alt="" />
                <h1>{movieIds.title}</h1>
                <p>user score {movieIds.vote_average}</p>
                <h2>overview</h2>
                <p>{movieIds.overview}</p>
                <h2>Genres</h2>
                <ul>
                    {movieIds.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
            </div>

            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>

            <Outlet />
        </>
    )
    
}