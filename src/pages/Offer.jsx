import { useEffect, useState, Link } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/Offer.css";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // je récupère l'id
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);

        // Je fais isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <section className="offer-id">
      <div>
        <img src={data.product_image.secure_url} alt="" />
      </div>
      <article>
        <div>
          <p>{data.product_price} €</p>
          <div className="details-product">
            {data.product_details.map((details, index) => {
              const keys = Object.keys(details);
              const valuekeys = Object.values(details);
              // console.log(keys);
              return (
                <>
                  <div className="keys-values">
                    <div>
                      <div key={index}>{keys}</div>
                    </div>
                    <div>
                      <div key={index}>{valuekeys}</div>
                    </div>
                  </div>
                </>
              );
            })}
            <div>
              <div>
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
              </div>
              <p>avatar</p>
              <p>username</p>
              <button>Acheter</button>
            </div>
          </div>
        </div>
      </article>
    </section>
    // <Link to="/home">
    //   <button>Naviguer vers Home</button>
    // </Link>
  );
};

export default Offer;
