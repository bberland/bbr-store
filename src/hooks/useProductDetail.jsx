import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

export const useProductDetail = (productId) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)

      const itemRef = doc(db, "products", productId)

      getDoc(itemRef)
        .then((doc) => {
          setProduct({
            id: doc.id,
            ...doc.data()
          })
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }, [productId])

    return { product, isLoading }
}
