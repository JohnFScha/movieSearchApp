import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch, fetchSearchRequest } from "../../store";
import { Navigate, useSearchParams } from "react-router-dom";
import { generateNumberArray } from "../../utils/createRange";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import PageSelect from "../PageSelect/PageSelect";

const SearchList = () => {
  const { search, loading, pages, page } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const token = sessionStorage.getItem("token");
  const range = generateNumberArray(1, pages);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchSearch(page, keyword));
    }, 1500);
  }, []);

  const handlePage = useCallback(
    (num) => {
      dispatch(fetchSearchRequest(page));
      setTimeout(() => {
        dispatch(fetchSearch(num, keyword));
      }, 1500);
    },
    [page]
  );

  return (
    <main className="min-h-screen">
      {!token && <Navigate to="/" />}
      {loading === true ? (
        <Loader />
      ) : search ? (
        <>
          <h2 className="text-4xl text-center italic my-5">Search results:</h2>
          <MovieListContainer movies={search} />
        </>
      ) : (
        <Loader />
      )}
      <PageSelect range={range} page={page} handlePage={handlePage} />
    </main>
  );
};

export default SearchList;
