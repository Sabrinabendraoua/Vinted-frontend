import { Link } from "react-router-dom";
import logo from "../images/logo-Vinted.png";
import "../assets/Header.css";

const Header = ({ handleToken, userToken }) => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo de Vinted" />
        </Link>
      </div>
      {!userToken ? (
        <>
          <div>
            <div>
              <p> Rechercher des articles</p>
            </div>
          </div>
          <div>
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
          <button>Vends tes articles</button>
        </>
      ) : (
        <button
          onClick={() => {
            handleToken();
          }}
        >
          Déconnexion
        </button>
      )}
    </header>
  );
};

export default Header;
