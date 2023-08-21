import Login from "./Components/Login/Login";
import Listado from "./Components/Listado/Listado";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import SearchList from "./Components/SearchList/SearchList";
import Favorites from "./Components/Favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={!token ? <Login /> : <Navigate to={'/listado'} />}
        />
        <Route  
          path="/listado"
          element={token ? <Listado /> : <Navigate to={'/'} />}
        />
        <Route
          path="/listado/:movieId"
          element={token ? <MovieDetail /> : <Navigate to={'/'} />}
        />
        <Route
          path="/busqueda"
          element={token ? <SearchList /> : <Navigate to={'/'} />}
        />
        <Route
          path="/favoritos"
          element={token ? <Favorites /> : <Navigate to={'/'} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
