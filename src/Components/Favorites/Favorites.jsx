import React from 'react'
import MovieListContainer from '../MovieListContainer/MovieListContainer';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favs'));
  console.log(favorites)

  return (
    <main className="min-h-screen">
      <h2 className="text-4xl text-center italic my-5">Favorites:</h2>
      <MovieListContainer movies={favorites} />
    </main>
  )
}

export default Favorites