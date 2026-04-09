import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import '../styles/products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const data = await res.json()
                setProducts(data.products)
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchData()
    }, [])
  return (
    <div className='products-page'>
          <h1>Product List</h1>
          <div className="products-container">
              {products.map((pro) => {
                  return (
                      <ProductCard key={pro.id} product={pro}/>
                  )
              })}
          </div>
    </div>
  )
}

export default Products