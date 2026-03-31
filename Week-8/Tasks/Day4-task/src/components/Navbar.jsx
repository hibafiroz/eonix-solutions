import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='navbar'>
          <img src={logo} alt="logo" width='120' /> 
          <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/products'><li>Products</li></Link>
              <Link to='/dashboard'><li>Dashboard</li></Link>
          </ul>
          <button>Get Started</button>
    </div>
  )
}

export default Navbar