import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  return (
    <div className="bg-white/10 rounded-lg text-white shadow-md p-10 hover:shadow-xl transition duration-300">
      <img src={product.image} alt="item"className="h-40 w-full object-contain mb-4" />
      <h2 className="font-semibold text-md mb-2 line-clamp-1">{product.title}</h2>
      <p className="text-green-400 font-bold mb-2">${product.price}</p>
      <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); addToCart(product) }} className="bg-green-400 font-semibold text-black px-4 py-2 rounded-md w-full hover:bg-green-500/80 duration-300">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
