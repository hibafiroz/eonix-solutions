import { Link } from "react-router-dom";
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to My Store</h1>
        <p>We sell high quality products at the best price.</p>
        <Link to="/products">
          <button className="home-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;