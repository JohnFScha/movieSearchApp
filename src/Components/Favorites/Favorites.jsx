  import React from 'react'
  import { Navigate } from 'react-router-dom';
  import MovieListContainer from '../MovieListContainer/MovieListContainer';
  import { connect } from 'react-redux';

  const Favorites = ({ favs, auth }) => {
    const favorites = favs;

    return (
      <>
      {!auth && <Navigate to={'/'} />}
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

  const mapStateToProps = (state) => {
    return {
      favs: state.favorites.favs,
      auth: state.auth.token
    }
  }

  export default connect(mapStateToProps)(Favorites);