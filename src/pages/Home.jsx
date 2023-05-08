import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import hero from "../images/banner.png";
import "../assets/Home.css";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        //console.log(response.data); // j'ai bien ma data
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
    <>
      <section className="hero">
        <img src={hero} alt="photo banner Vinted" />
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </section>
      <main className="container-main">
        <section className="product-detail">
          {data.offers.map((dataoffers) => {
            // console.log(dataoffers);
            if (dataoffers.owner.account.username) {
              // console.log(dataoffers.avatar);
              return (
                <Link to={`/offer/${dataoffers._id}`}>
                  <div key={dataoffers._id} className="product">
                    <div>
                      {dataoffers.owner.account.avatar && (
                        <img
                          className="avatar"
                          src={dataoffers.owner.account.avatar.secure_urlurl}
                        />
                      )}
                      <span>{dataoffers.owner.account.username}</span>
                    </div>

                    <div>
                      <div className="img-product">
                        <img src={dataoffers.product_image.secure_url} />
                      </div>
                      <div>
                        <span>{dataoffers.product_price} €</span>

                        <div>
                          {dataoffers.product_details.map((detail, index) => {
                            console.log(detail);
                            if (detail.TAILLE) {
                              return <span>{detail.TAILLE}</span>;
                            }
                          })}
                          {dataoffers.product_details.map((detail, index) => {
                            if (detail.MARQUE) {
                              return <span>{detail.MARQUE}</span>;
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </section>
      </main>
    </>
  );
};

export default Home;
