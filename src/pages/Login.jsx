import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
import "../assets/Signup-login.css";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const Login = ({ handelToken }) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "https://lereacteur-vinted-api.herokuapp.com/user/login",
  //       {
  //         email: email,
  //         password: password,
  //       }
  //     );

  //     // console.log(response.data);
  //     handelToken(response.data.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <form className="signup-login-container">
        <h2>Se connecter</h2>

        <input
          type="email"
          placeholder="Email"
          // onChange={(event) => {
          //   setEmail(event.target.value);
          // }}
          // value={email}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          // onChange={(event) => {
          //   setPassword(event.target.value);
          // }}
          // value={password}
        />

        <button type="submit">S'inscrire</button>
        <Link to="/Signup">
          <p className="text-link ">Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </>
  );
  // };
};

export default Login;
