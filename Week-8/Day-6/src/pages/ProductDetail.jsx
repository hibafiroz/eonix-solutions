import { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


function ProductDetail() {
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
        setLoading(false)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData()
  }, [id])
  
  if (loading) return <h1 className='bg-black flex justify-center items-center h-screen text-green-400 text-2xl font-bold'>Loading...</h1>

  return (
    <div className="bg-black text-white h-[99vh] p-10">
      <div className="max-w-5xl mx-auto mt-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white p-8 rounded-lg">
          <img src={product.image} alt="image" className="h-80 mx-auto object-contain" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            {product.title}
          </h2>

          <p className="text-gray-400 mb-2">
            Category: {product.category}
          </p>

          <p className="mb-4 text-gray-300">
            {product.description}
          </p>

          <div className="text-2xl font-bold text-green-400 mb-4">
            ${product.price}
          </div>

          <div className="mb-6">
            Rating: {product.rating.rate}
          </div>

          <div className='flex gap-5'>
             <button onClick={()=>navigate('/products')} className="bg-green-400 text-black px-20 py-3 rounded-lg font-semibold hover:bg-green-500">
              Go Back
            </button>
            <button onClick={()=>addToCart(product)} className="bg-green-400 text-black px-20 py-3 rounded-lg font-semibold hover:bg-green-500">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail