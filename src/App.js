import "./styles.css";
import Home from "./components/home.js";
import Meal from "./components/meal.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meal" element={<Meal />} />
        </Routes>
      </Router>
    </div>
  );
}
