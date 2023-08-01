import { useParams } from "react-router-dom"
import { Loading } from "./Loading"
import { useProductDetail } from "../hooks/useProductDetail"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer = () => {
  const {productId} = useParams()
  const {product, isLoading} = useProductDetail(productId)
  
  return (
    <>
      {
        isLoading
          ? <Loading />
          : <ItemDetail item={product} />
      }
    </>
  )
}
