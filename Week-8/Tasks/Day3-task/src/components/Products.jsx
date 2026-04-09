import useFetch from "../hooks/useFetch";
import "../App.css";

const Products = () => {

    const { loading, error, product } = useFetch()

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    return (
        <div className="container">
            <h1 className="title">Product List</h1>
            <div className="product-grid">
            {product.map((pro, index) => {
                return (
                    <div key={index}>
                        <img src={pro.thumbnail} width="100" />
                        <p>{pro.title}</p>
                        <p>{pro.price}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Products