import React, { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import { generateNumberArray } from "../../utils/createRange";
import PageSelect from "../PageSelect/PageSelect";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZmNDg0NzNkMjRlZTBjOWM4YTg4NmNiNmFkODQ2ZCIsInN1YiI6IjY0ZDE1MmQ3ZDlmNGE2MDNiNTRhOTU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4_T2lHWSmjDOegqYp1IZqdY0r6ehkr7E9h1Y-nxtzM",
  },
};

const SearchList = () => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [range, setRange] = useState([]);
  const [searchParams] = useSearchParams();
  const token = sessionStorage.getItem("token");
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    async function fetchSearch() {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      if (data.total_pages >= 2) {
        setRange(generateNumberArray(1, data.total_pages));
      }
      setSearch(data.results);
      setLoading(false);
    }

    setTimeout(() => {
      fetchSearch();
    }, 1500);
  }, [keyword, page]);

  const handlePage = (num) => {
    setPage(num);
    setLoading(true);
  };

  return (
    <main className="min-h-screen">
      {!token && <Navigate to="/" />}
      {loading === true ? (
        <Loader loading={loading} />
      ) : (
        <>
          <h2 className="text-4xl text-center italic my-5">Search results:</h2>
          <MovieListContainer movies={search} />
          <div className="flex justify-around w-5/6 mx-auto my-10">
            {range.map((num, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => handlePage(num)}
                  className={
                    page === num
                      ? "w-16 p-4 rounded-lg bg-slate-300 text-black"
                      : "w-16 p-4 rounded-lg bg-black text-white"
                  }
                >
                  {num}
                </button>
              );
            })}
          </div>
        </>
      )}
    <PageSelect range={range} page={page}/>
    </main>
  );
};

export default SearchList;
