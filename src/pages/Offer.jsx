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
        <p>{data.product_price} €</p>
      </article>
    </section>
    // <Link to="/home">
    //   <button>Naviguer vers Home</button>
    // </Link>
  );
};

export default Offer;
