import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </section>
      <section></section>
      <Link to="/offer">
        <button>Naviguer vers Offer</button>
      </Link>
    </>
  );
};

export default Home;
