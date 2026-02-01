import { Header } from "./Header"
import { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "931413e320c91d34d848893b12e7ec1f";

export const MoviesPage = ()=>{
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = () => {
        if (!query.trim()) return;

        fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=uk-UA&query=${query}`
        )
        .then(res => res.json())
        .then(data => setMovies(data.results));
    };

    return(
        <>
            <Header/>
            <div>
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Введіть назву фільму"
                />
                <button type="button" onClick={handleSearch}>
                Search
                </button>
            </div>

            <ul>
                {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                    {movie.title}
                    </Link>
                </li>
                ))}
            </ul>
        </>
    )
    
}