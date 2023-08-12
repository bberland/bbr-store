import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import { useNavigate } from "react-router-dom"

export const useProductDetail = (productId) => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
      setIsLoading(true)

      const itemRef = doc(db, "products", productId)

      getDoc(itemRef)
        .then((doc) => {
          if (doc.data() != null) {
            setProduct({
              id: doc.id,
              ...doc.data()
            })
          } else {
            navigate('/0/products')
          }
          
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false))
    }, [productId])

    return { product, isLoading }
}
