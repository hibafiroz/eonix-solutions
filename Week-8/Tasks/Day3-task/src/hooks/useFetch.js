import { useEffect, useState } from "react"

function useFetch() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [product, setProduct] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const data = await res.json()                              // converts json to js object
                setProduct(data.products)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {loading, error, product}
}

export default useFetch