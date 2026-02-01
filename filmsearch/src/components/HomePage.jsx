import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { Header } from "./Header"

const API_KEY = "931413e320c91d34d848893b12e7ec1f"

export const HomePage = ()=>{
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=uk-UA`
        )
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }, []);

    return (
        <>
         <Header/>
        <h1>Trending today</h1>
        <ul>
            {movies.map(movie=>(
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