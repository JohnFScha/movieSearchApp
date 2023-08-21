import React from "react";
import Logo from "../../assets/alkemy.png";
import { Link } from "react-router-dom";
import Buscador from "../Buscador/Buscador";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Dropdown from "../Dropdown/Dropdown";
import 'animate.css';

const Header = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <header className="animate__animated animate__fadeInDown sticky top-0">
      <nav className="flex justify-between bg-black text-white p-2 shadow-lg shadow-gray-600">
        <div className="flex justify-center items-center gap-5">
          <img src={Logo} alt="alkemy" className="w-11 h-auto" />
          <ul className="flex gap-5">
            {token ? (
              <li>
                <Link
                  to={"/listado"}
                  className="p-3 rounded-lg bg-white text-black"
                >
                  Movie List
                </Link>
              </li>
            ) : null}
            {token ? (
              <li>
                <Link
                  to={"/favoritos"}
                  className="p-3 rounded-lg bg-white text-black"
                >
                  Favorites
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        {token ? (
        <Buscador />
        ) : null}
        {!token ? (
          <Dropdown />
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
