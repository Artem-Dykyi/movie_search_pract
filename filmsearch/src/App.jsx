import { Routes, Route } from "react-router-dom";

//import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
import { MovieDetail } from "./components/MovieDetail";

import { Cast } from "./components/Cast";
import { Reviews } from "./components/Review";


function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>

        <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;


