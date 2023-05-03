import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/Offer" element={<Offer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
