import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div>
      <h2>S'inscrire</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
              email: email,
              username: username,
              password: password,
              newsletter: newsletter,
            }
          );
          console.log(response.data);
        }}
      >
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <div>
          <input
            id="newsletter"
            type="checkbox"
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <p>Tu as déjà un compte ?, connecte-toi !</p>
      </Link>
    </div>
  );
};

export default Form;
