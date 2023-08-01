import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"


export const useProductDetail = (productId) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)
      getData()
        .then(res => {
          setProduct(res.find(p => p.id === Number(productId)))
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }, [productId])

    return { product, isLoading }
}
