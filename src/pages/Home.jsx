import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import hero from "../images/banner.png";
import "../assets/Home.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);// j'ai bien ma data
        // Je stocke le résultat dans data
        setData(response.data);

        // Je fais isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <section className="hero">
        <img src={hero} alt="photo banner Vinted" />
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </section>
      <div className="username-avatar">
        {data.offers.map((dataoffers) => {
          console.log(dataoffers.owner);

          return (
            <>
              <div>
                <img src="" alt="" />
                <span>userName</span>
              </div>
            </>
          );
        })}
      </div>
      <section></section>
      <Link to="/offer">
        <button>Naviguer vers Offer</button>
      </Link>
    </main>
  );
};

export default Home;
