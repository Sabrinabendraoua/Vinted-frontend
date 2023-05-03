import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link to="/offer">
        <button>Naviguer vers Offer</button>
      </Link>
      <Header />
    </>
  );
};

export default Home;
