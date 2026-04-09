import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'

function ProductList() {
  const { product, loading, error } = useFetch()
  const [search, setSearch] = useState('')
  if (loading) return <h1 className='bg-black flex justify-center items-center h-screen text-green-400 text-2xl font-bold'>Loading...</h1>
  if (error) return <h1 className='flex justify-center bg-black items-center h-screen text-red-500 text-2xl font-bold'>{error}</h1>

  return (
    <div className="bg-black p-20">

      <div className="flex justify-end gap-16 mb-1 py-10">
        <h1 className="text-3xl text-green-400 mt-10 font-bold uppercase mb-6">
          Available Products
        </h1>

        <input
          className="w-80 border h-10 px-4 border-green-500 bg-black/10 rounded-xl text-white"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
        {
          product.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase())).
          map((item) => {
          return (
            <Link to={`/products/${item.id}`}>
              <ProductCard key={item.id} product={item} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
