import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const useProducts = (categoryId) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setIsLoading(true)

      const productsRef = collection(db, "products")
      const q = categoryId == 0 || categoryId > 3
        ? productsRef
        : query(productsRef, where("categoryId", "==", Number(categoryId)))

      getDocs(q)
        .then((res) => {
          const docs = res.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            } 
          })
          console.log(categoryId, docs)
          setProducts(docs)
        })
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false))
    }, [categoryId])

    return { products, isLoading }
}
