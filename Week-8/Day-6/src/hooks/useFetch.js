import { useEffect, useState } from "react"

function useFetch() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json()
                console.log(data)
                setProduct(data)
                setLoading(false)
            } catch (err) {
                setError({ err })
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { product, loading, error }
}

export default useFetch