import shoe from '../assets/shoe.jpg'
import bottle from '../assets/bottle.jpg'
import laptop from '../assets/laptop.jpg'
import watch from '../assets/watch.jpg'
import phone from '../assets/phone.jpg'
import bag from '../assets/bag.jpg'
import { Link } from 'react-router-dom'


const Products = () => {
    const products = [
        { id: 1, name: "Shoes", image: shoe },
        { id: 2, name: "Watch", image: watch },
        { id: 3, name: "Phone", image: phone },
        { id: 4, name: "Laptop", image: laptop },
        { id: 5, name: "Bag", image: bag },
        { id: 6, name: "bottle", image: bottle },
    ];
    return (
        <div className="product">
            <div>
                <h1>Our products</h1>
                <div className="product-grid">
                { products.map((pro) => {
                    return (
                        <div className='card' key={pro.id}>
                            <Link to={`/products/${pro.id}`}>
                            <img src={pro.image} alt={pro.name} />
                            <h3>{pro.name}</h3>
                            </Link>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Products
