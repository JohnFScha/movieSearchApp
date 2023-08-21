import React from "react";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import { connect } from "react-redux";

const Favorites = ({ favs }) => {
  const favorites = favs;

  return (
    <main className="min-h-screen">
      <h2 className="text-4xl text-center italic my-5">Favorites:</h2>
      {favorites.length === 0 ? (
        <h3 className="text-center">Nothing here</h3>
      ) : (
        <MovieListContainer movies={favorites} />
      )}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    favs: state.favorites.favs,
  };
};

export default connect(mapStateToProps)(Favorites);
