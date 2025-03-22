import React, { useContext } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { WatchListCtx } from "../store/watchListCtx";

function WatchList() {
  const { watchLists } = useContext(WatchListCtx);

  return (
    <div className="container">
      <h2>Your Watch List</h2>

      <div className="movie-cards">
        {watchLists && watchLists.length > 0 ? (
          Object.values(watchLists).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <p
            style={{
              color: "white",
            }}
          >
            No movie in your Watch List!
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchList;
