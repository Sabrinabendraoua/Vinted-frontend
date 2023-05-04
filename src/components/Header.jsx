import { Link } from "react-router-dom";
import logo from "../images/logo-Vinted.png";
import "../assets/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo de Vinted" />
        </Link>
      </div>
      <div>
        <div>
          <p> Recherche des articles</p>
          <div>
            <span>trier par prix</span>
            <span>prix entre</span>
          </div>
        </div>
      </div>
      <div>
        <button>S'inscrire</button>
        <Link to="/signup">
          <button>Se connecter</button>
        </Link>
        <button>Vendes tes articles</button>
      </div>
    </header>
  );
};

export default Header;
