import { BrowserRouter, Route, Routes } from "react-router-dom"
import {CartProvider} from "./context/CartContext"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App