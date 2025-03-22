import React from "react";
import "../App.css";

import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard/MovieCard";

export const API_KEY = import.meta.env.VITE_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function MoviePage() {
  const { data: movies, loading, error } = useFetch(url, []);

  return (
    <div className="container">
      <h2>Movie List</h2>
      {error && <p>Faild to fetch!</p>}
      {loading && <p>Loading...</p>}
      <div className="movie-cards">
        {movies &&
          movies.results &&
          Object.values(movies.results).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  );
}

export default MoviePage;
