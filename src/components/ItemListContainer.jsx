import { ItemList } from "./ItemList"
import { Loading } from "./Loading"
import { useProducts } from "../hooks/useProducts"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const {categoryId} = useParams()
  const {products, isLoading} = useProducts(categoryId)

  console.log(categoryId);
  console.log(products);

  return (
    <>
      {
        isLoading
          ? <Loading />
          : <ItemList products={products} />
      }
    </>
  )
}
