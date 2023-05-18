import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Pubish = ({ userToken }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Votre article a bien été ajouté");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", state);
      formData.append("city", location);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return userToken ? (
    <>
      <form className="signup-login-container " onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            // console.log(event);
            setPicture(event.target.files[0]);
          }}
        />

        <input
          value={title}
          type="text"
          placeholder="Titre "
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          value={description}
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <input
          value={brand}
          type="text"
          placeholder="Marque"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          value={size}
          type="text"
          placeholder="Taille"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          value={color}
          type="text"
          placeholder="Couleur"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          value={state}
          type="text"
          placeholder="Etat"
          onChange={(event) => {
            setState(event.target.value);
          }}
        />
        <input
          value={location}
          type="text"
          placeholder="Lieu"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <input
          value={price}
          type="Number"
          placeholder="Prix"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <div className="div-button-files">
          <input type="submit" value="Ajouter" className="button-files" />
        </div>
      </form>
    </>
  ) : (
    <Navigate to="/Login" />
  );
};

export default Pubish;
