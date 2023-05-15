import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function MovieApp() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=681c1319")
        .then((response) => response.json())
        .then((data) => setMovies(data.search));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="movie-card-container">
      <h1>Movies List</h1>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            image={movie.Poster}
            title={movie.Title}
          />
        ))}
    </div>
  );
}

function MovieCard({ Poster, Title }) {
  return (
    <div className="movie-card">
      <img src={Poster} alt={Title} />
      <h3>{Title}</h3>
    </div>
  );
}
MovieCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
};

export default MovieApp;
