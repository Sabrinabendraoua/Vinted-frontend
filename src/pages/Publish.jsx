import { Navigate } from "react-router-dom";
import { useState } from "react";

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

  return userToken ? (
    <form className="signup-login-container ">
      <input
        type="file"
        onChange={(event) => {
          console.log(event);
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
        name=""
        id=""
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
        type="number"
        placeholder="Prix"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Pubish;
