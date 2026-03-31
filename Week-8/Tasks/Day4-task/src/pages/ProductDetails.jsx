import { useParams } from "react-router-dom"
import shoe from '../assets/shoe.jpg'
import bottle from '../assets/bottle.jpg'
import laptop from '../assets/laptop.jpg'
import watch from '../assets/watch.jpg'
import phone from '../assets/phone.jpg'
import bag from '../assets/bag.jpg'

const ProductDetails = () => {
    const { id } = useParams()
    const products = [
        { id: 1, name: "Shoes", image: shoe },
        { id: 2, name: "Watch", image: watch },
        { id: 3, name: "Phone", image: phone },
        { id: 4, name: "Laptop", image: laptop },
        { id: 5, name: "Bag", image: bag },     
        { id: 6, name: "bottle", image: bottle },
    ];
    const product = products.find((p) => p.id === parseInt(id))
  return (
      <div className="productDetail">
          <div>
              <h1>{product.name}</h1>
              <p>Product ID: { id }</p>
              <img src={product.image} alt={product.name} />
              
          </div>
    </div>
  )
}

export default ProductDetails