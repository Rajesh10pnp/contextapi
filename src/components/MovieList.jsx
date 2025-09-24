// src/components/MovieList.js
import React from "react";
import { useMovies } from "../contexts/MovieContext";

function MovieList() {
  const { watchlist, addToWatchlist } = useMovies();

  const sampleMovie = { id: 1, title: "Inception" };

  return (
    <div style={{ padding: "20px" }}>
      <h3>All Movies</h3>
      <button onClick={() => addToWatchlist(sampleMovie)}>Add Inception</button>

      <h3>My Watchlist</h3>
      <pre>{JSON.stringify(watchlist, null, 2)}</pre>
    </div>
  );
}

export default MovieList;
