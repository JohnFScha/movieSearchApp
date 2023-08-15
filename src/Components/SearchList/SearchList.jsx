import React, { useState, useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';
import MovieListContainer from '../MovieListContainer/MovieListContainer';
import Loader from '../Loader/Loader';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZmNDg0NzNkMjRlZTBjOWM4YTg4NmNiNmFkODQ2ZCIsInN1YiI6IjY0ZDE1MmQ3ZDlmNGE2MDNiNTRhOTU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4_T2lHWSmjDOegqYp1IZqdY0r6ehkr7E9h1Y-nxtzM'
  }
};

const SearchList = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const token = sessionStorage.getItem('token');
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    async function fetchSearch() {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
      const data = await response.json()
      setSearch(data.results)
      setLoading(false)
    }    
  
    setTimeout(() => {
      fetchSearch()
    }, 1500);
  }, [keyword])
  
  console.log(search)

  return (
    <>
    {!token && <Navigate to='/' />} 
    {loading === true ? (
        <Loader loading={loading}/>
      ) : (
        <main className="min-h-screen">
          <h2 className="text-4xl text-center italic my-5">Search results:</h2>
          <MovieListContainer movies={search} />
        </main>
      )}
    </>
  )
}

export default SearchList