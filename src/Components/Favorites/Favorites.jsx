import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import MovieListContainer from '../MovieListContainer/MovieListContainer';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favs');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, [favorites]);

  let token = sessionStorage.getItem('token');

  return (
    <>
    {!token && <Navigate to={'/'} />}
    <main className="min-h-screen">
    <h2 className="text-4xl text-center italic my-5">Favorites:</h2>
    {
      favorites.length === 0 ? ( <h3 className='text-center'>Nothing here</h3> ) : (
      <MovieListContainer movies={favorites} /> )
    }
    </main>
    </>
  )
}

export default Favorites