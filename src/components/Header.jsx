import { Link } from "react-router-dom";
import logo from "../images/logo-Vinted.png";
import "../assets/Header.css";

const Header = ({ handelToken, userToken }) => {
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

            <button>Vends tes articles</button>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            handelToken();
          }}
        >
          Déconnexion
        </button>
      )}
    </header>
  );
};

export default Header;
