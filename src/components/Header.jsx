import logo from "../images/logo-Vinted.png";
import "../assets/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo de Vinted" />
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
        <button>Se connecter</button>
        <button>Vendes tes articles</button>
      </div>
    </header>
  );
};

export default Header;
