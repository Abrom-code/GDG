import React, { use } from "react";
import "./Moviecard.css";
import { WatchListCtx } from "../../store/watchListCtx";

function MovieCard(movie) {
  const { watchLists, addToWatchLists, removeFromWatchList } =
    use(WatchListCtx);
  const isAdded = watchLists.find((list) => list.id === movie.id);
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <div className="movie-detail">
        <h2>{movie.title}</h2>
        <div>
          <p>Released Year : </p>
          <p>{movie.release_date}</p>
        </div>
        <div>
          <p>Rating</p>
          <p>
            {movie.vote_average}({movie.vote_count})
          </p>
        </div>
        {isAdded ? (
          <button onClick={() => removeFromWatchList(movie)}>
            - Remove from watchlist
          </button>
        ) : (
          <button onClick={() => addToWatchLists(movie)}>
            + Add to watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
