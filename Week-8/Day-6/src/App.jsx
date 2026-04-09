import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import ProtectedRoutes from './routes/ProtectedRoutes'
import About from './pages/About'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<ProtectedRoutes><ProductList /></ProtectedRoutes>} />
        <Route path='/products/:id' element={ <ProtectedRoutes><ProductDetail /></ProtectedRoutes>} />
        <Route path='/cart' element={ <ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App