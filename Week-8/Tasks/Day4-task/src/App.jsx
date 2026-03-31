import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App