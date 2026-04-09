import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg-black flex flex-col justify-center items-center text-center h-[99vh] px-6 text-white">
      <div>
        <h1 className="text-5xl mt-16 font-bold mb-4 text-green-500">
          Welcome to GreenStore
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Discover the best products at the best prices. Simple, fast and reliable shopping experience.
        </p>
        <button onClick={()=>navigate('/products')} className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home
