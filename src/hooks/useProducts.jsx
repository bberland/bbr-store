import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"


export const useProducts = (categoryId) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(categoryId)

    useEffect(() => {
      setIsLoading(true)
      getData()
        .then(res => {
          categoryId != 0
            ? setProducts(res.filter(p => p.categoryId === Number(categoryId)))
            : setProducts(res)
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }, [categoryId])

    return { products, isLoading }
}
