import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const Navbar = () => {
  const { cart } = useContext(CartContext)
  return (
    <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link to='cart'>Cart ({cart.length})</Link>
    </nav>
  )
}

export default Navbar