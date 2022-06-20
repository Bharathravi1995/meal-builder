import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Welcome to meal builder</h1>
        <h3>The meal encyclopaedia</h3>
        <Link to="/meal" className="button button--primary button--inline">
          Build a meal
        </Link>
      </div>
    </div>
  );
};

export default Home;
