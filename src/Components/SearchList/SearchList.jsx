import React, { useEffect, useCallback } from "react";
import { fetchSearch, fetchSearchRequest } from "../../store";
import { Navigate, useSearchParams } from "react-router-dom";
import { generateNumberArray } from "../../utils/createRange";
import { connect } from "react-redux";
import MovieListContainer from "../MovieListContainer/MovieListContainer";
import Loader from "../Loader/Loader";
import PageSelect from "../PageSelect/PageSelect";

const SearchList = ({ search, loading, pages, page, auth, fetchSearch, fetchSearchRequest }) => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const range = generateNumberArray(1, pages);

  useEffect(() => {
    setTimeout(() => {
      fetchSearch(page, keyword);
    }, 1500);
  }, [keyword]);

  const handlePage = useCallback(
    (num) => {
      fetchSearchRequest(page);
      setTimeout(() => {
        fetchSearch(num, keyword);
      }, 1500);
    },
    [page]
  );

  return (
    <main className="min-h-screen">
      {!auth && <Navigate to="/" />}
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

const mapStateToProps = (state) => {
  return {
    search: state.search.search,
    loading: state.search.loading,
    pages: state.search.pages,
    page: state.search.page,
    auth: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (page, keyword) => dispatch(fetchSearch(page, keyword)),
    fetchSearchRequest: (page) => dispatch(fetchSearchRequest(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
