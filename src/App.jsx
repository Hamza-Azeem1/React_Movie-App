import React from "react";
import Navbar from "./components/navbar.jsx";
import SearchBar from "./components/searchbar.jsx";
import MovieApp from "./components/movies.jsx";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBar />
      <MovieApp />
    </React.Fragment>
  );
}

export default App;
