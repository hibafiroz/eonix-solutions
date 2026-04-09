import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../styles/products.css'


const ProductCard = ({product}) => {
    const {addToCart}=useContext(CartContext)
  return (
    <div className="card">
          <img src={product.thumbnail} alt="image" width='120' />
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard