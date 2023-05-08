import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//Components
import Header from "./components/Header";

function App() {
  //cette fonction va enregistrer l'argument token dans les cookies
  const handelToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
    } else {
      Cookies.remove("userToken");
    }
  };
  return (
    <Router>
      <Header handelToken={handelToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handelToken={handelToken} />} />
        <Route path="/login" element={<Login handelToken={handelToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
