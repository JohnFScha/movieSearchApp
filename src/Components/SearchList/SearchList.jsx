import React from 'react'
import { Navigate, useSearchParams} from 'react-router-dom';
const SearchList = () => {
  const token = sessionStorage.getItem('token');
  const keyword = useSearchParams();
  console.log(keyword)

  return (
    <>
    {!token && <Navigate to='/' />}
    <div className='min-h-screen'>SearchList</div>
    </>
  )
}

export default SearchList