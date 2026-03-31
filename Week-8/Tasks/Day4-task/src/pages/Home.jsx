import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>
      <p>
       Discover amazing products at the best prices with a seamless and enjoyable shopping experience. We offer a wide range of high-quality products including shoes, watches, laptops, phones, bags, and many more essentials for your daily life. Our platform is designed with modern technology to ensure smooth navigation, fast performance, and a user-friendly interface. We focus on quality, affordability, and customer satisfaction, making sure that every product you explore meets your expectations. Start exploring our collection today and find the perfect products that match your style, needs, and lifestyle.
      </p>

      <Link to="/products">
        <button>Explore Products</button>
      </Link>
    </div>
  )
}

export default Home